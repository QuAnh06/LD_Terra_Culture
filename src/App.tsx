import { useState, useEffect } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { WhatWeDoView } from './components/WhatWeDoView';
import { ProjectsView } from './components/ProjectsView';
import { NewsView } from './components/NewsView';
import { ContactView } from './components/ContactView';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { Project, NewsArticle } from './data/content';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Sync hash routing on load & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageView;
      const validViews: PageView[] = ['home', 'about', 'what-we-do', 'projects', 'news', 'contact'];
      if (validViews.includes(hash)) {
        setCurrentView(hash);
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ed] text-[#1d1b18] font-editorial-sans antialiased">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={setLang}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProject={setSelectedProject}
            lang={lang}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {currentView === 'what-we-do' && (
          <WhatWeDoView
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {currentView === 'projects' && (
          <ProjectsView
            onSelectProject={setSelectedProject}
            lang={lang}
          />
        )}

        {currentView === 'news' && (
          <NewsView
            onSelectArticle={setSelectedArticle}
            lang={lang}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            lang={lang}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />

      {/* Interactive Dossier & Article Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        onNavigate={handleNavigate}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
      />
    </div>
  );
}
