import React, { useState } from 'react';
import { PageView } from './Navbar';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  lang: 'en' | 'fr';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#121212] text-[#b5b0a7] pt-16 pb-8 border-t border-[#232220] transition-colors">
      <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#242321]">
          {/* COL 1: BRAND & SOCIAL */}
          <div>
            <div
              onClick={() => onNavigate('home')}
              className="cursor-pointer group inline-block"
            >
              <div className="text-[#c49b80] opacity-90 mb-1 group-hover:opacity-100 transition-opacity">
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
              <div className="font-editorial-heading text-2xl tracking-[0.2em] font-bold text-[#e5dec9] leading-none uppercase">
                TERRA
                <span className="block font-editorial-serif text-[15px] tracking-[0.16em] lowercase font-normal text-[#d1bda2] mt-0.5">
                  culture Lab
                </span>
              </div>
              <span className="text-[9px] tracking-[0.12em] text-[#8c8276] italic font-editorial-serif mt-1 block">
                Where Ideas Meet the World.
              </span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="#instagram"
                aria-label="Instagram"
                onClick={(e) => { e.preventDefault(); alert('Terra Culture Lab @terraculturelab'); }}
                className="w-8 h-8 rounded-full border border-[#33312e] flex items-center justify-center text-xs text-[#9f9b93] hover:text-[#b24b27] hover:border-[#b24b27] transition-all"
              >
                ◎
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                onClick={(e) => { e.preventDefault(); alert('Terra Culture Lab LinkedIn'); }}
                className="w-8 h-8 rounded-full border border-[#33312e] flex items-center justify-center text-xs font-semibold text-[#9f9b93] hover:text-[#b24b27] hover:border-[#b24b27] transition-all"
              >
                in
              </a>
              <a
                href="#vimeo"
                aria-label="Vimeo"
                onClick={(e) => { e.preventDefault(); alert('Terra Culture Lab Vimeo Channel'); }}
                className="w-8 h-8 rounded-full border border-[#33312e] flex items-center justify-center text-xs font-semibold text-[#9f9b93] hover:text-[#b24b27] hover:border-[#b24b27] transition-all"
              >
                v
              </a>
            </div>
          </div>

          {/* COL 2: EXPLORE */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              {lang === 'en' ? 'Explore' : 'Explorer'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8f8b83]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#b24b27] transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'About' : 'À Propos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('what-we-do')}
                  className="hover:text-[#b24b27] transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'What We Do' : 'Notre Métier'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#b24b27] transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Projects' : 'Projets'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-[#b24b27] transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'News' : 'Actualités'}
                </button>
              </li>
            </ul>
          </div>

          {/* COL 3: CONTACT INFOS */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              {lang === 'en' ? 'Contact' : 'Contact'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#8f8b83]">
              <div className="flex items-start gap-2">
                <span className="text-stone-400">📍</span>
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-stone-400">✉️</span>
                <a
                  href="mailto:hello@terraculturelab.com"
                  className="hover:text-[#b24b27] transition-colors"
                >
                  hello@terraculturelab.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-stone-400">🌐</span>
                <span className="text-stone-300">terraculturelab.com</span>
              </div>
              <div className="pt-2 text-[11px] text-[#78746c]">
                <span>{lang === 'en' ? 'Offices in Paris & Hanoi' : 'Bureaux à Paris & Hanoi'}</span>
              </div>
            </div>
          </div>

          {/* COL 4: NEWSLETTER */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Newsletter
            </h4>
            <p className="text-xs text-[#8c8880] mb-3 leading-relaxed">
              {lang === 'en'
                ? 'Stay updated with our latest projects, tours and stories.'
                : 'Restez informé de nos derniers projets, tournées et créations.'}
            </p>

            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'en' ? 'Your email address' : 'Votre adresse email'}
                className="flex-1 bg-[#1c1c1c] border border-[#33312e] text-white text-xs px-3.5 py-2.5 outline-none focus:border-[#b24b27] placeholder:text-[#6a665e]"
              />
              <button
                type="submit"
                className="bg-[#b24b27] hover:bg-[#913a1b] text-white px-3.5 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>

            {subscribed && (
              <p className="text-[11px] text-emerald-400 mt-2 font-medium">
                {lang === 'en' ? 'Thank you for subscribing!' : 'Merci pour votre inscription !'}
              </p>
            )}
          </div>
        </div>

        {/* BOTTOM LEGAL */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6f6b64]">
          <div>
            © Terra Culture Lab 2026 — {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#b24b27] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Legal Notice' : 'Mentions Légales'}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#b24b27] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
