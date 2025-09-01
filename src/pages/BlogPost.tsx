import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
import { WordPressService } from "@/services/wordpressService";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("Post não encontrado");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Fetch all posts and find the one with matching slug
        const posts = await WordPressService.fetchPosts(1, 50);
        const foundPost = posts.find(p => p.slug === slug);
        
        if (foundPost) {
          const formattedPost = WordPressService.formatPost(foundPost);
          setPost(formattedPost);
        } else {
          setError("Post não encontrado");
        }
      } catch (error) {
        console.error('Erro ao carregar post:', error);
        setError("Erro ao carregar o post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
            <p className="text-slate-400">Carregando post...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post não encontrado</h1>
            <p className="text-slate-400 mb-6">{error}</p>
            <Link to="/blog">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar ao Blog
              </Button>
            </Link>
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
      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedDottedBackground opacity={0.3} color="%23a855f7" size={3} spacing={90} />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-slate-400 hover:text-purple-400 mb-8 transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar ao Blog
            </Link>

            {/* Post Meta */}
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-purple-400/10 text-purple-300 border-purple-400/30">
                {post.category}
              </Badge>
              <div className="flex items-center text-slate-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {post.displayDate || new Date(post.date).toLocaleDateString('pt-BR')}
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <User className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span key={tag} className="flex items-center text-sm px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Post Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/30 rounded-2xl border border-slate-700 p-8 md:p-12">
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-p:text-slate-300 prose-p:leading-relaxed
                  prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white prose-em:text-slate-300
                  prose-ul:text-slate-300 prose-ol:text-slate-300
                  prose-li:text-slate-300 prose-li:my-1
                  prose-blockquote:border-l-purple-400 prose-blockquote:text-slate-300
                  prose-code:text-purple-300 prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Gostou do Conteúdo?
            </h2>
            <p className="text-slate-400 mb-8">
              Receba os melhores insights sobre recrutamento tech diretamente no seu e-mail.
            </p>
            
            <Link to="/blog">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Ver Mais Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;