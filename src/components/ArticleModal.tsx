import React from 'react';
import { NewsArticle } from '../data/content';
import { X, Calendar, User, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  lang: 'en' | 'fr';
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  lang,
}) => {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert(lang === 'en' ? 'Article link copied to clipboard!' : 'Lien de l’article copié !');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-[#fbf9f5] w-full max-w-2xl rounded-none border border-[#e4dfd5] shadow-2xl overflow-hidden my-8">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#1d1b18]/80 hover:bg-[#1d1b18] text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X size={18} />
        </button>

        {/* HERO IMAGE */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#e5dfd5]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#f5a381] block mb-1">
              {lang === 'en' ? article.category : article.categoryFr}
            </span>
            <h2 className="font-editorial-serif text-2xl sm:text-3xl font-medium leading-snug">
              {lang === 'en' ? article.title : article.titleFr}
            </h2>
          </div>
        </div>

        {/* METADATA BAR */}
        <div className="px-6 py-3 bg-[#f2ece0] border-b border-[#e4dfd5] flex items-center justify-between text-xs text-[#6e685f]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-[#b24b27]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <User size={13} className="text-[#b24b27]" />
              {article.author}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#b24b27] hover:underline cursor-pointer"
          >
            <Share2 size={13} />
            <span>{lang === 'en' ? 'Share' : 'Partager'}</span>
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 sm:p-8 space-y-4">
          <p className="font-editorial-serif text-lg italic text-[#2c2824] leading-relaxed border-b border-[#e4dfd5] pb-4">
            {lang === 'en' ? article.excerpt : article.excerptFr}
          </p>

          <div className="prose max-w-none text-sm text-[#4a463f] leading-relaxed space-y-4">
            {(lang === 'en' ? article.content : article.contentFr)
              .split('\n\n')
              .map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'first-letter:text-4xl first-letter:font-editorial-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#b24b27]'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
          </div>

          <div className="pt-6 border-t border-[#e4dfd5] flex items-center justify-between">
            <span className="text-xs text-[#8c8276] italic">
              Terra Culture Lab Press Desk — Paris & Hanoi
            </span>
            <button
              onClick={onClose}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b24b27] hover:underline cursor-pointer"
            >
              {lang === 'en' ? 'Back to News' : 'Retour aux Actualités'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
