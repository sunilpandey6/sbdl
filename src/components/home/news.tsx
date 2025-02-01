import NewsHero from '../News/NewsHero';
import BlogCard from '../News/BlogCard'
import { useBlog } from '../../contexts/BlogContext'; 
export function News () {
  const { posts } = useBlog();
  return (
    <section id = 'news' className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="min-h-screen">
        <NewsHero />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  date={post.date}
                  image={post.image}
                  excerpt={post.excerpt}
                  category={post.category}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};