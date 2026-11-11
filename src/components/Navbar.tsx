import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type PageView = 'home' | 'about' | 'what-we-do' | 'projects' | 'news' | 'contact';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  lang: 'en' | 'fr';
  onToggleLang: (lang: 'en' | 'fr') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageView; labelEn: string; labelFr: string }[] = [
    { id: 'home', labelEn: 'Home', labelFr: 'Accueil' },
    { id: 'about', labelEn: 'About', labelFr: 'À Propos' },
    { id: 'what-we-do', labelEn: 'What We Do', labelFr: 'Notre Métier' },
    { id: 'projects', labelEn: 'Projects', labelFr: 'Projets' },
    { id: 'news', labelEn: 'News', labelFr: 'Actualités' },
    { id: 'contact', labelEn: 'Contact', labelFr: 'Contact' },
  ];

  const handleLinkClick = (id: PageView) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f7f4ed] border-b border-[#e4dfd5] transition-colors">
      <div className="max-w-[1260px] mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex flex-col items-start text-left cursor-pointer group focus:outline-none"
        >
          {/* World Map Orbit / Grid Icon */}
          <div className="text-[#8f6044] opacity-85 mb-1 group-hover:opacity-100 transition-opacity">
            <svg className="w-16 h-5" viewBox="0 0 100 35" fill="none" stroke="currentColor">
              <ellipse cx="50" cy="17" rx="42" ry="15" strokeWidth="1.2" strokeDasharray="2.5 2.5" />
              <path
                d="M15 15 C 22 9, 32 11, 37 16 C 41 19, 44 13, 50 14 C 57 15, 62 10, 72 13 C 80 15, 87 11, 90 18 C 84 23, 72 21, 67 25 C 57 24, 47 28, 37 23 C 27 25, 19 20, 15 15 Z"
                fill="currentColor"
                fillOpacity="0.4"
                strokeWidth="0.8"
              />
              <line x1="8" y1="17" x2="92" y2="17" strokeWidth="0.8" stroke="currentColor" />
            </svg>
          </div>
          
          <div className="font-editorial-heading text-2xl lg:text-[26px] tracking-[0.22em] font-bold text-[#4b3628] leading-none uppercase">
            TERRA
            <span className="block font-editorial-serif text-[15px] tracking-[0.18em] lowercase font-normal text-[#634b39] mt-0.5">
              culture Lab
            </span>
          </div>
          <span className="text-[9px] tracking-[0.14em] text-[#8c8276] italic font-editorial-serif mt-1">
            Where Ideas Meet the World.
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1.5 text-[11.5px] lg:text-[12px] uppercase font-semibold tracking-[0.18em] transition-colors cursor-pointer ${
                  isActive ? 'text-[#b24b27]' : 'text-[#2e2a25] hover:text-[#b24b27]'
                }`}
              >
                {lang === 'en' ? link.labelEn : link.labelFr}
                {isActive && (
                  <>
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#b24b27]" />
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#b24b27]" />
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT ZONE: LANGUAGE SWITCHER & MOBILE TRIGGER */}
        <div className="flex items-center gap-4">
          <div className="text-[11px] font-semibold tracking-[0.15em] text-[#7b756d] border-l border-[#e4dfd5] pl-4 flex items-center gap-1.5">
            <button
              onClick={() => onToggleLang('fr')}
              className={`hover:text-[#1d1b18] transition-colors cursor-pointer ${
                lang === 'fr' ? 'text-[#1d1b18] font-bold underline decoration-[#b24b27] underline-offset-4' : 'text-[#8c8276]'
              }`}
            >
              FR
            </button>
            <span>/</span>
            <button
              onClick={() => onToggleLang('en')}
              className={`hover:text-[#1d1b18] transition-colors cursor-pointer ${
                lang === 'en' ? 'text-[#1d1b18] font-bold underline decoration-[#b24b27] underline-offset-4' : 'text-[#8c8276]'
              }`}
            >
              EN
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4b3628] hover:text-[#b24b27] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf9f5] border-b border-[#e4dfd5] px-6 py-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-xs uppercase font-semibold tracking-[0.18em] py-2 border-b border-[#ece7dc] transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#b24b27] font-bold' : 'text-[#2e2a25]'
                  }`}
                >
                  <span>{lang === 'en' ? link.labelEn : link.labelFr}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#b24b27]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
