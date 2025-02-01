import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, date, image, excerpt, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
          <div className="flex items-center ml-4 text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <Link
          to={`/news/${id}`}
          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
        >
        <h3 className="text-xl font-bold mb-3 text-[#002B5B] hover:text-blue-600 transition-colors">
          {title}
        </h3>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          to={`/news/${id}`}
          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;