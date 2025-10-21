import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogHeader from "./components/BlogHeader"; 
import BlogSection from "./components/BlogSection";
import Pagination from "./components/Pagination";
import PromoSection from "./components/PromoSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BlogHeader /> 
      <main>
        <BlogSection />
        <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
      </main>
      <PromoSection />
      <Footer />
    </div>
  );
};

export default App;
