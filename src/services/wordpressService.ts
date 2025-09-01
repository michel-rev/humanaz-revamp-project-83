export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  modified: string;
  slug: string;
  link: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

export class WordPressService {
  private static readonly BASE_URL = 'https://app.humanaz.io/wp-json/wp/v2';

  static async fetchPosts(page: number = 1, perPage: number = 10): Promise<WordPressPost[]> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/posts?page=${page}&per_page=${perPage}&_embed=wp:featuredmedia,wp:term&orderby=date&order=desc`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Erro ao buscar posts do WordPress:', error);
      return [];
    }
  }

  static async fetchCategories(): Promise<WordPressCategory[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/categories?per_page=50`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const categories = await response.json();
      return categories;
    } catch (error) {
      console.error('Erro ao buscar categorias do WordPress:', error);
      return [];
    }
  }

  static formatPost(post: WordPressPost) {
    // Remove HTML tags from excerpt
    const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
    
    // Get featured image URL
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                         '/lovable-uploads/bf08bbb3-71ef-422a-9b7a-284d46696b7b.png'; // fallback image
    
    // Get categories
    const categories = post._embedded?.['wp:term']?.[0] || [];
    const categoryName = categories[0]?.name || 'Não categorizado';
    
    // Format date
    const date = new Date(post.date).toLocaleDateString('pt-BR');
    
    return {
      id: post.id,
      title: post.title.rendered,
      excerpt: excerpt.length > 150 ? excerpt.substring(0, 150) + '...' : excerpt,
      content: post.content.rendered,
      category: categoryName,
      author: 'HumanAZ',
      date: post.date.split('T')[0], // Keep ISO format for sorting
      displayDate: date,
      readTime: this.calculateReadTime(post.content.rendered),
      image: featuredImage,
      link: post.link,
      slug: post.slug,
      tags: categories.map(cat => cat.name).slice(0, 3) // Limit to 3 tags
    };
  }

  private static calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, '');
    const words = textContent.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  }

  static stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
  }
}