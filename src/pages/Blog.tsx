import { useState, useEffect } from "react";
import { Search, Calendar, User, ArrowRight, Tag, Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
import { WordPressService, WordPressPost } from "@/services/wordpressService";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWordPressData = async () => {
      setLoading(true);
      try {
        // Fetch posts from WordPress
        const posts = await WordPressService.fetchPosts(1, 20);

        // Format posts
        const formattedPosts = posts.map(post => WordPressService.formatPost(post));
        setBlogPosts(formattedPosts);
      } catch (error) {
        console.error('Erro ao carregar dados do WordPress:', error);
        // Keep empty arrays if failed
      } finally {
        setLoading(false);
      }
    };

    fetchWordPressData();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
            <p className="text-slate-400">Carregando posts do blog...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <AnimatedDottedBackground opacity={0.3} color="%23a855f7" size={3} spacing={90} />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-sm mb-6">
              <Tag className="w-4 h-4 mr-2" />
              Blog HumanAZ
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Insights sobre <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Recrutamento Tech</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Descubra as últimas tendências, estratégias e insights do mercado de recrutamento de tecnologia no Brasil.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-purple-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Post em Destaque</h2>
            <p className="text-slate-400">Não perca nosso conteúdo mais recente</p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-purple-400/10 text-purple-300 border-purple-400/30">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.displayDate || new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open(featuredPost.link, '_blank')}
                  >
                    Ler mais
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Todos os Posts</h2>
            <p className="text-slate-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-400/10 text-purple-300 border-purple-400/30">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.displayDate || new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => window.open(post.link, '_blank')}
                    >
                      Ler mais
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {otherPosts.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Nenhum artigo encontrado</h3>
              <p className="text-slate-400">Tente ajustar seus filtros de busca.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fique por Dentro das <span className="text-purple-400">Tendências</span>
            </h2>
            <p className="text-slate-400 mb-8">
              Receba os melhores insights sobre recrutamento tech diretamente no seu e-mail.
            </p>
            
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-purple-400"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap">
                Assinar
              </Button>
            </div>
            
            <p className="text-xs text-slate-500 mt-4">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;