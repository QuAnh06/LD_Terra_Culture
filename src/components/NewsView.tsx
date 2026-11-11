import React, { useState } from 'react';
import { NEWS_ARTICLES, NewsArticle } from '../data/content';
import { Search, ArrowRight, ArrowLeft } from 'lucide-react';
import { DottedWorldMap } from './DottedWorldMap';

interface NewsViewProps {
  onSelectArticle: (article: NewsArticle) => void;
  lang: 'en' | 'fr';
}

export const NewsView: React.FC<NewsViewProps> = ({
  onSelectArticle,
  lang,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All News');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);

  const categories = [
    { en: 'All News', fr: 'Toutes les Actualités' },
    { en: 'Project Updates', fr: 'Projets' },
    { en: 'Events', fr: 'Événements' },
    { en: 'Partners', fr: 'Partenaires' },
    { en: 'Press', fr: 'Presse' },
    { en: 'Artist Spotlights', fr: 'Portraits d’Artistes' },
    { en: 'Cultural Insights', fr: 'Regards Culturels' },
  ];

  // Filtering
  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory =
      activeCategory === 'All News' ||
      article.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      article.categoryFr.toLowerCase().includes(activeCategory.toLowerCase());

    const textToSearch = `${article.title} ${article.titleFr} ${article.excerpt} ${article.excerptFr}`.toLowerCase();
    const matchesSearch = searchQuery.trim() === '' || textToSearch.includes(searchQuery.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles.find((a) => a.isFeatured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter((a) => a.id !== featuredArticle?.id);

  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sidebarEmail) return;
    setSidebarSubscribed(true);
    setTimeout(() => {
      setSidebarSubscribed(false);
      setSidebarEmail('');
    }, 4000);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH DOTTED WORLD MAP (MATCHING DESIGN) */}
      <section className="relative overflow-hidden border-b border-[#e4dfd5] pt-12 pb-16 lg:pt-14 lg:pb-16">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 z-10">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'News & Insights' : 'Actualités & Regards'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1a1613] leading-[1.08] mb-6">
                {lang === 'en' ? (
                  <>
                    Stories from our<br />
                    projects and partners.
                  </>
                ) : (
                  <>
                    Récits de nos<br />
                    projets et partenaires.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#666158] leading-relaxed font-light">
                {lang === 'en'
                  ? 'Discover the latest news, project updates, artist spotlights and cultural insights from Terra Culture Lab.'
                  : 'Découvrez les actualités, coulisses de création, portraits d’artistes et chroniques culturelles de Terra Culture Lab.'}
              </p>
            </div>

            {/* Right Column: Dotted World Map */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-[660px] opacity-90">
                <DottedWorldMap showArcs={true} highlightPins={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="pt-8 pb-4">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-[#e4dfd5] pb-4 mb-10 gap-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-5 lg:gap-7">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.en;
                return (
                  <button
                    key={cat.en}
                    onClick={() => setActiveCategory(cat.en)}
                    className={`relative py-1.5 text-xs uppercase font-semibold tracking-[0.16em] transition-colors cursor-pointer ${
                      isActive ? 'text-[#b24b27]' : 'text-[#635f58] hover:text-[#b24b27]'
                    }`}
                  >
                    <span>{lang === 'en' ? cat.en : cat.fr}</span>
                    {isActive && (
                      <>
                        <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#b24b27]" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#b24b27]" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'en' ? 'Search news...' : 'Rechercher...'}
                className="w-full bg-white border border-[#e4dfd5] px-3.5 py-2 pl-9 text-xs text-[#1d1b18] placeholder:text-[#8f8b83] outline-none focus:border-[#b24b27] transition-colors"
              />
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8f8b83]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-[#1d1b18]"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN EDITORIAL TWO-COLUMN LAYOUT */}
      <section className="pb-20">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: ARTICLES STREAM */}
            <div className="lg:col-span-8">
              {featuredArticle && (
                <div
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="group cursor-pointer mb-12 pb-12 border-b border-[#e4dfd5]"
                >
                  <div className="relative aspect-16/9 w-full overflow-hidden bg-[#e5dfd5] mb-5">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#b24b27] text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1">
                      {lang === 'en' ? 'Featured' : 'À la Une'}
                    </div>
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#8c8276] block mb-2">
                    {featuredArticle.date}
                  </span>

                  <h2 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a1613] group-hover:text-[#b24b27] transition-colors leading-tight mb-4">
                    {lang === 'en' ? featuredArticle.title : featuredArticle.titleFr}
                  </h2>

                  <p className="text-sm text-[#615c54] leading-relaxed mb-4 font-light">
                    {lang === 'en' ? featuredArticle.excerpt : featuredArticle.excerptFr}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-[0.14em] text-[#b24b27] group-hover:gap-2.5 transition-all">
                    <span>{lang === 'en' ? 'Read More' : 'Lire la Suite'}</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              )}

              {/* LIST OF ARTICLES */}
              <div className="space-y-8">
                {regularArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onSelectArticle(article)}
                    className="group cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-6 pb-8 border-b border-[#e4dfd5] items-center"
                  >
                    <div className="sm:col-span-4 aspect-4/3 overflow-hidden bg-[#e5dfd5]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="sm:col-span-8">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-[#8c8276] font-medium block mb-1.5">
                        {article.date}
                      </span>
                      <h3 className="font-editorial-serif text-xl sm:text-2xl font-semibold text-[#1a1613] group-hover:text-[#b24b27] transition-colors leading-snug mb-2">
                        {lang === 'en' ? article.title : article.titleFr}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#615c54] leading-relaxed mb-3 line-clamp-2">
                        {lang === 'en' ? article.excerpt : article.excerptFr}
                      </p>
                      <div className="inline-flex items-center gap-1 text-xs uppercase font-semibold tracking-[0.14em] text-[#b24b27] group-hover:gap-2 transition-all">
                        <span>{lang === 'en' ? 'Read More' : 'Lire la Suite'}</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION */}
              <div className="flex items-center gap-2 pt-10">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="w-9 h-9 border border-[#e4dfd5] flex items-center justify-center text-xs text-[#444] hover:border-[#b24b27] hover:text-[#b24b27] transition-colors cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ArrowLeft size={13} />
                </button>

                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`w-9 h-9 text-xs font-semibold transition-colors cursor-pointer ${
                      currentPage === num
                        ? 'bg-[#b24b27] text-white border border-[#b24b27]'
                        : 'border border-[#e4dfd5] text-[#444] hover:border-[#b24b27] hover:text-[#b24b27]'
                    }`}
                  >
                    {num}
                  </button>
                ))}

                <span className="px-2 text-xs text-[#888]">...</span>

                <button
                  onClick={() => setCurrentPage(8)}
                  className={`w-9 h-9 text-xs font-semibold transition-colors cursor-pointer ${
                    currentPage === 8
                      ? 'bg-[#b24b27] text-white border border-[#b24b27]'
                      : 'border border-[#e4dfd5] text-[#444] hover:border-[#b24b27] hover:text-[#b24b27]'
                  }`}
                >
                  8
                </button>

                <button
                  onClick={() => setCurrentPage(Math.min(8, currentPage + 1))}
                  className="w-9 h-9 border border-[#e4dfd5] flex items-center justify-center text-xs text-[#444] hover:border-[#b24b27] hover:text-[#b24b27] transition-colors cursor-pointer"
                  aria-label="Next Page"
                >
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: SIDEBAR */}
            <div className="lg:col-span-4 space-y-10">
              
              {/* Widget 1: LATEST NEWS */}
              <div className="bg-[#fbf9f5] border border-[#e4dfd5] p-6 sm:p-7">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] pb-3 border-b border-[#e4dfd5] mb-6">
                  {lang === 'en' ? 'Latest News' : 'Dernières Nouvelles'}
                </h4>

                <div className="space-y-5">
                  {NEWS_ARTICLES.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectArticle(item)}
                      className="group cursor-pointer flex items-center gap-3.5"
                    >
                      <div className="w-16 h-14 shrink-0 overflow-hidden bg-[#e5dfd5]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#8c8276] block mb-0.5">
                          {item.date}
                        </span>
                        <h5 className="text-xs font-semibold text-[#1d1b18] group-hover:text-[#b24b27] transition-colors line-clamp-2 leading-snug">
                          {lang === 'en' ? item.title : item.titleFr}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 2: STAY CONNECTED */}
              <div className="bg-[#f4eee2] border border-[#ded5c5] p-6 sm:p-7">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] pb-3 border-b border-[#ded5c5] mb-4">
                  {lang === 'en' ? 'Stay Connected' : 'Restez Connecté'}
                </h4>

                <p className="text-xs text-[#6e685f] leading-relaxed mb-4">
                  {lang === 'en'
                    ? 'Subscribe to our newsletter to receive the latest updates, event invitations and artistic stories.'
                    : 'Abonnez-vous à notre lettre d’information pour recevoir nos invitations et actualités artistiques.'}
                </p>

                <form onSubmit={handleSidebarSubscribe} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={sidebarEmail}
                    onChange={(e) => setSidebarEmail(e.target.value)}
                    placeholder={lang === 'en' ? 'Your email address' : 'Votre adresse email'}
                    className="w-full bg-white border border-[#ded5c5] px-3.5 py-2.5 text-xs text-[#1d1b18] placeholder:text-[#8c8276] outline-none focus:border-[#b24b27]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.16em] py-3 transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? 'Subscribe' : 'S’inscrire'}
                  </button>
                </form>

                {sidebarSubscribed && (
                  <p className="text-[11px] text-[#2c6e49] mt-2 font-medium">
                    {lang === 'en' ? '✓ Subscription confirmed. Welcome!' : '✓ Inscription confirmée. Bienvenue !'}
                  </p>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
