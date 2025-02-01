import React from 'react';
import { Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogDetailProps {
  post: {
    title: string;
    date: string;
    image: string;
    category: string;
    content: string;
  };
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      
      <div className="flex items-center mb-6">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
        <div className="flex items-center ml-4 text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{post.date}</span>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-[#002B5B]">{post.title}</h1>
      
      <div className="prose prose-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

    </article>
  );
};

export default BlogDetail;