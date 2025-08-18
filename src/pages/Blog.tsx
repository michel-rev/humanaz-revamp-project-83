import { useState } from "react";
import { Search, Calendar, User, ArrowRight, Tag, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Recrutamento Tech",
    "Tendências RH", 
    "Startups",
    "Fintechs",
    "Mercado de Trabalho",
    "Carreira"
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Como Construir Times de Tecnologia de Alto Performance em 2024",
      excerpt: "Descubra as estratégias mais eficazes para formar equipes tech que impulsionam o crescimento das startups brasileiras.",
      content: "O mercado de tecnologia brasileiro está em constante evolução...",
      category: "Recrutamento Tech",
      author: "HumanAZ",
      date: "2024-01-15",
      readTime: "8 min",
      image: "/lovable-uploads/bf08bbb3-71ef-422a-9b7a-284d46696b7b.png",
      tags: ["Tech", "Liderança", "Performance"]
    },
    {
      id: 2,
      title: "O Futuro do Recrutamento Tech: Tendências para 2024",
      excerpt: "Exploramos as principais tendências que estão transformando o processo de contratação de profissionais de tecnologia.",
      content: "A inteligência artificial está revolucionando o recrutamento...",
      category: "Tendências RH",
      author: "HumanAZ",
      date: "2024-01-10",
      readTime: "6 min",
      image: "/lovable-uploads/ea0d4845-0c02-41b4-82cc-961d720f19c9.png",
      tags: ["Futuro", "AI", "Tendências"]
    },
    {
      id: 3,
      title: "Fintechs em Alta: Como Atrair os Melhores Talentos",
      excerpt: "As fintechs brasileiras estão crescendo rapidamente. Saiba como atrair e reter os profissionais mais qualificados do mercado.",
      content: "O setor de fintechs no Brasil apresenta um crescimento exponencial...",
      category: "Fintechs",
      author: "HumanAZ",
      date: "2024-01-08",
      readTime: "10 min",
      image: "/lovable-uploads/c214c201-c292-47ad-be06-fae231a17ebf.png",
      tags: ["Fintech", "Talentos", "Mercado"]
    },
    {
      id: 4,
      title: "Startup Unicórnio: O Papel do RH Estratégico no Sucesso",
      excerpt: "Analisamos como empresas que se tornaram unicórnios estruturaram seus processos de pessoas desde o início.",
      content: "Empresas unicórnio têm uma característica em comum...",
      category: "Startups",
      author: "HumanAZ",
      date: "2024-01-05",
      readTime: "12 min",
      image: "/lovable-uploads/ed6a6a6d-9131-41d0-96f4-9af0ed67736a.png",
      tags: ["Unicórnio", "RH", "Estratégia"]
    },
    {
      id: 5,
      title: "Mercado Aquecido: Salários Tech em 2024",
      excerpt: "Um panorama completo sobre a evolução salarial dos profissionais de tecnologia no mercado brasileiro.",
      content: "O mercado de tecnologia apresenta uma valorização constante...",
      category: "Mercado de Trabalho",
      author: "HumanAZ", 
      date: "2024-01-03",
      readTime: "7 min",
      image: "/lovable-uploads/1ca6efa9-3c24-4bd7-ba87-c9c5cb76d832.png",
      tags: ["Salários", "Mercado", "Tech"]
    },
    {
      id: 6,
      title: "Carreira Tech: Do Junior ao Senior em 3 Anos",
      excerpt: "Estratégias comprovadas para acelerar o crescimento profissional na área de tecnologia.",
      content: "A progressão de carreira em tecnologia pode ser muito rápida...",
      category: "Carreira",
      author: "HumanAZ",
      date: "2024-01-01",
      readTime: "9 min",
      image: "/lovable-uploads/6e13cf7c-9c7b-4c9f-8bd8-3b96824d359a.png",
      tags: ["Carreira", "Crescimento", "Desenvolvimento"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

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

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
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

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-purple-600 hover:bg-purple-700 text-white border-0" 
                      : "border-slate-700 text-slate-400 hover:text-white hover:border-purple-400/50 bg-transparent"
                    }
                  >
                    {category}
                  </Button>
                ))}
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
                    {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
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
                  
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Ler mais
                    <ArrowRight className="ml-2 w-4 h-4" />
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
                      {new Date(post.date).toLocaleDateString('pt-BR')}
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
                    
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Ler mais
                      <ArrowRight className="ml-2 w-4 h-4" />
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