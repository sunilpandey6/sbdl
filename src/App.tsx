import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/home/Header';
import Home from "./pages/Home";
import BlogPost from './pages/BlogPost';
import HeaderN from './components/home/HeaderNews';

function App() {
  return <Main />;
}

function Main() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Conditionally render Header or HeaderN based on the route */}
      {location.pathname.startsWith('/news') ? <HeaderN /> : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
