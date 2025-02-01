export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Drive with Confidence, Learn with Experts
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Start your journey to becoming a confident driver with our professional instructors
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}