import React from 'react';
import { Project } from '../data/content';
import { X, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { PageView } from './Navbar';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'en' | 'fr';
  onNavigate: (view: PageView) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  lang,
  onNavigate,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-[#fbf9f5] w-full max-w-3xl rounded-none border border-[#e4dfd5] shadow-2xl overflow-hidden my-8">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#1d1b18]/80 hover:bg-[#1d1b18] text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* HERO IMAGE */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#e5dfd5]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#f5a381] block mb-1">
              {lang === 'en' ? project.categoryLabel : project.categoryLabelFr}
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl font-medium leading-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 mt-2">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-[#d6653d]" />
                {project.year}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#d6653d]" />
                {project.location}
              </span>
            </div>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-[#1d1b18] font-editorial-serif text-lg sm:text-xl italic leading-relaxed border-b border-[#e4dfd5] pb-5">
            "{lang === 'en' ? project.description : project.descriptionFr}"
          </div>

          <div className="text-sm text-[#4a463f] leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-editorial-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#b24b27]">
              {lang === 'en' ? project.fullStory : project.fullStoryFr}
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="bg-[#f2ece0] p-5 border-l-2 border-[#b24b27]">
            <h4 className="text-xs uppercase tracking-[0.16em] font-bold text-[#b24b27] mb-3">
              {lang === 'en' ? 'Project Highlights & Milestones' : 'Points Clés & Jalons'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3b3731]">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#b24b27] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e4dfd5]">
            <div className="text-xs text-[#7d786f]">
              {lang === 'en'
                ? 'Interested in touring, presenting, or supporting this project?'
                : 'Intéressé par la diffusion ou le mécénat de ce projet ?'}
            </div>
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>{lang === 'en' ? 'Get in Touch' : 'Nous Contacter'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
