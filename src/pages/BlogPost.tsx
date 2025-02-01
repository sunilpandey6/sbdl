import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../Data/blogPosts';
import BlogDetail from '../components/News/BlogDetail';
import Footer from '../components/home/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      <BlogDetail post={post} />
      <Footer />
    </div>
  );
};

export default BlogPost;