const NewsHero = () => {
  return (
    <div className="relative h-[40vh] flex items-center justify-center bg-fixed bg-cover bg-center"
         style={{
           backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
         }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Latest News & Insights</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Stay updated with the latest trends and insights in finance and consulting
        </p>
      </div>
    </div>
  );
};

export default NewsHero;