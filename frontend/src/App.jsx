import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/ui/ParticleBackground';
import Card from './components/ui/cards';
import BlogPage from './pages/BlogPage';
import { BlogData } from './data/blogData';
import './App.css';

function App() {
  return (
    <>
      <ParticleBackground />

      <div className="p-1 h-40">
        <Navbar />
      </div>

      <main className="flex flex-col justify-center items-center min-h-[70vh]">
        <Routes>
          <Route path="/" element={
            <>
              <div className="mt-6 font-sans font-extrabold text-4xl mb-4 text-white">
                Blog Page
              </div>
              <div className="text-xl mb-4 font-sans text-white">
                Explore the world of Machine Learning and AI with KDAG
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-transparent m-10">
                {BlogData.map((data) => (
                  <Card key={data.id} cardDetails={data} />
                ))}
              </div>
            </>
          } />
          <Route path="/:slug" element={<BlogPage blogData={BlogData} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
