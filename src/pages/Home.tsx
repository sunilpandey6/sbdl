import Header from '../components/home/Header';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Services } from '../components/home/Services';
import { Offers } from '../components/home/Offers';
import { Testimonials } from '../components/home/Testimonials';
import { News } from '../components/home/news';
import Contact from '../components/home/Contact';
import { Footer } from '../components/home/Footer';
import { BlogProvider } from '../contexts/BlogContext'; // Import BlogProvider

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Offers />
      <Testimonials />
      <BlogProvider>
        <News />
      </BlogProvider>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
