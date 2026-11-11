import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/content';
import { ArrowRight, SlidersHorizontal, Globe, Award, Sparkles } from 'lucide-react';
import { DottedWorldMap } from './DottedWorldMap';

interface ProjectsViewProps {
  onSelectProject: (project: Project) => void;
  lang: 'en' | 'fr';
}

type FilterCategory = 'all' | 'performing-arts' | 'audiovisual' | 'cultural-heritage' | 'events' | 'collaborations';

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onSelectProject,
  lang,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const categories: { id: FilterCategory; labelEn: string; labelFr: string }[] = [
    { id: 'all', labelEn: 'All Projects', labelFr: 'Tous les Projets' },
    { id: 'performing-arts', labelEn: 'Performing Arts', labelFr: 'Arts Vivants' },
    { id: 'audiovisual', labelEn: 'Audiovisual', labelFr: 'Audiovisuel' },
    { id: 'cultural-heritage', labelEn: 'Cultural Heritage', labelFr: 'Patrimoine Culturel' },
    { id: 'events', labelEn: 'Events & Festivals', labelFr: 'Événements & Festivals' },
    { id: 'collaborations', labelEn: 'Collaborations', labelFr: 'Collaborations' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const scrollToGrid = () => {
    document.getElementById('projects-grid-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH DOTTED WORLD MAP (MATCHING DESIGN) */}
      <section className="relative overflow-hidden border-b border-[#e4dfd5] pt-12 pb-16 lg:pt-14 lg:pb-20">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 z-10">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'Our Projects' : 'Nos Projets'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1a1613] leading-[1.08] mb-6">
                {lang === 'en' ? (
                  <>
                    Creative projects,<br />
                    cultural impact.
                  </>
                ) : (
                  <>
                    Projets créatifs,<br />
                    impact culturel.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#666158] leading-relaxed mb-8 font-light">
                {lang === 'en'
                  ? 'From artistic creation to international events, Terra Culture Lab brings ideas to life.'
                  : 'De la création scénique aux événements internationaux, Terra Culture Lab donne vie aux idées.'}
              </p>

              <button
                onClick={scrollToGrid}
                className="inline-flex items-center gap-3 bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <span>{lang === 'en' ? 'Explore Our Projects' : 'Explorer Nos Projets'}</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Right Map Column (Dotted World Map as in screenshot) */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-[660px] opacity-95">
                <DottedWorldMap showArcs={true} highlightPins={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER BAR & 8 PROJECTS GRID */}
      <section id="projects-grid-section" className="py-14 lg:py-20">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#e4dfd5] pb-3 mb-12 gap-4">
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative py-2 text-xs uppercase font-semibold tracking-[0.16em] transition-colors cursor-pointer ${
                      isActive ? 'text-[#b24b27]' : 'text-[#635f58] hover:text-[#b24b27]'
                    }`}
                  >
                    <span>{lang === 'en' ? cat.labelEn : cat.labelFr}</span>
                    {isActive && (
                      <>
                        <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-[#b24b27]" />
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#b24b27]" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs uppercase font-medium tracking-[0.14em] text-[#888] shrink-0">
              <SlidersHorizontal size={14} />
              <span>{lang === 'en' ? 'Filter' : 'Filtrer'}</span>
            </div>
          </div>

          {/* 8 Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group flex flex-col cursor-pointer bg-transparent"
              >
                {/* Photo frame */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#e5dfd5] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Information */}
                <h3 className="font-editorial-serif text-2xl font-semibold text-[#1d1b18] group-hover:text-[#b24b27] transition-colors leading-snug">
                  {project.title}
                </h3>
                <span className="text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[#b24b27] mt-1 mb-2 block">
                  {lang === 'en' ? project.categoryLabel : project.categoryLabelFr}
                </span>
                <p className="text-xs text-[#6e685f] leading-relaxed mb-4 flex-grow">
                  {lang === 'en' ? project.description : project.descriptionFr}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-[0.14em] text-[#b24b27] group-hover:gap-2.5 transition-all">
                  <span>{lang === 'en' ? 'View Project' : 'Voir le Projet'}</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BOTTOM BANNER: ROOTED IN CULTURE & 3 PILLARS */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#191816] text-white overflow-hidden shadow-xl">
            
            {/* Left Image: Courtyard Arches */}
            <div className="lg:col-span-5 min-h-[320px] lg:min-h-[420px] relative bg-[#2a2825]">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Arched Historical Architecture"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#191816] lg:block hidden" />
            </div>

            {/* Right: Narrative + 3 Pillars */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <h2 className="font-editorial-serif text-3xl sm:text-4xl leading-tight text-white mb-4">
                {lang === 'en' ? (
                  <>
                    Rooted in culture.<br />
                    Open to the world.
                  </>
                ) : (
                  <>
                    Enracinés dans la culture.<br />
                    Ouverts sur le monde.
                  </>
                )}
              </h2>

              <div className="w-8 h-[2px] bg-[#b24b27] mb-4" />

              <p className="text-xs sm:text-sm text-[#9f9b94] leading-relaxed mb-8 max-w-xl font-light">
                {lang === 'en'
                  ? 'We believe in the power of ideas to cross borders, connect people and create meaningful impact across communities.'
                  : 'Nous croyons au pouvoir des idées pour traverser les frontières, relier les femmes et les hommes et générer un impact durable.'}
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#33312d]">
                {/* Pillar 1 */}
                <div>
                  <div className="text-[#b24b27] mb-2.5">
                    <Globe size={22} strokeWidth={1.5} />
                  </div>
                  <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#e4dfd5] mb-1">
                    {lang === 'en' ? 'International Vision' : 'Vision Internationale'}
                  </h5>
                  <p className="text-[11.5px] text-[#8c8880] leading-snug">
                    {lang === 'en'
                      ? 'Projects that connect cultures and open minds.'
                      : 'Des projets qui relient les cultures et ouvrent les esprits.'}
                  </p>
                </div>

                {/* Pillar 2 */}
                <div>
                  <div className="text-[#b24b27] mb-2.5">
                    <Award size={22} strokeWidth={1.5} />
                  </div>
                  <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#e4dfd5] mb-1">
                    {lang === 'en' ? 'Creative Excellence' : 'Excellence Créative'}
                  </h5>
                  <p className="text-[11.5px] text-[#8c8880] leading-snug">
                    {lang === 'en'
                      ? 'Artistic quality and innovative ideas.'
                      : 'Exigence artistique et propositions singulières.'}
                  </p>
                </div>

                {/* Pillar 3 */}
                <div>
                  <div className="text-[#b24b27] mb-2.5">
                    <Sparkles size={22} strokeWidth={1.5} />
                  </div>
                  <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#e4dfd5] mb-1">
                    {lang === 'en' ? 'Meaningful Impact' : 'Impact Sensible'}
                  </h5>
                  <p className="text-[11.5px] text-[#8c8880] leading-snug">
                    {lang === 'en'
                      ? 'Actions that inspire dialogue and change.'
                      : 'Des initiatives qui nourrissent le dialogue et l’échange.'}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
