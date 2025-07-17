import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import StoryPage from './components/pages/StoryPage';
import ContactPage from './components/pages/ContactPage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import BloomUnboundPage from './components/pages/BloomUnboundPage';
import BloomABeanPage from './components/pages/BloomABeanPage';
import ResonantResiliencePage from './components/pages/ResonantResiliencePage';
import BloomInTransitPage from './components/pages/BloomInTransitPage';
import FAQsPage from './components/pages/FAQsPage';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsPage from './components/pages/TermsPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'story':
        return <StoryPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'bloom-unbound':
        return <BloomUnboundPage onNavigate={handleNavigate} />;
      case 'bloom-a-bean':
        return <BloomABeanPage onNavigate={handleNavigate} />;
      case 'resonant-resilience':
        return <ResonantResiliencePage onNavigate={handleNavigate} />;
      case 'bloom-in-transit':
        return <BloomInTransitPage onNavigate={handleNavigate} />;
      case 'faqs':
        return <FAQsPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      default:
        // Handle blog post pages
        if (currentPage.startsWith('blog-post-')) {
          const postId = currentPage.replace('blog-post-', '');
          return <BlogPostPage postId={postId} onNavigate={handleNavigate} />;
        }
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
