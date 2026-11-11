import React from 'react';
import { PageView } from './Navbar';
import { HeroArtwork } from './HeroArtwork';
import { PROJECTS, Project } from '../data/content';
import { ArrowRight, Clapperboard, Drama, Video, Globe2 } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: PageView) => void;
  onSelectProject: (project: Project) => void;
  lang: 'en' | 'fr';
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProject,
  lang,
}) => {
  const featuredProjects = PROJECTS.slice(0, 4);

  const scrollToDarkSection = () => {
    document.getElementById('home-what-we-do')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#e4dfd5] pt-12 pb-20 lg:pt-16 lg:pb-24">
        {/* World map dotted matrix overlay */}
        <div className="world-map-backdrop" />

        <div className="max-w-[1260px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#b24b27]">
                  {lang === 'en' ? 'Arts • Culture • Storytelling' : 'Arts • Culture • Récits'}
                </span>
                <span className="w-6 h-[1.5px] bg-[#b24b27]" />
              </div>

              <h1 className="font-editorial-serif text-5xl sm:text-6xl lg:text-[72px] font-semibold tracking-[-0.01em] text-[#1a1613] leading-[1.04] uppercase mb-6">
                {lang === 'en' ? (
                  <>
                    Where Ideas<br />
                    Meet The World.
                  </>
                ) : (
                  <>
                    Quand les Idées<br />
                    Rencontrent le Monde.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#666158] max-w-lg leading-relaxed mb-8 font-light">
                {lang === 'en'
                  ? 'Terra Culture Lab creates and produces artistic projects that connect cultures, inspire dialogue and reveal new perspectives.'
                  : 'Terra Culture Lab conçoit et produit des projets artistiques qui relient les cultures, inspirent le dialogue et ouvrent de nouvelles perspectives.'}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-3 bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
                >
                  <span>{lang === 'en' ? 'Discover Our Projects' : 'Découvrir Nos Projets'}</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Scroll indicator */}
              <button
                onClick={scrollToDarkSection}
                className="mt-14 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#8c8276] hover:text-[#b24b27] transition-colors cursor-pointer"
              >
                <span>↓</span>
                <span>{lang === 'en' ? 'Scroll' : 'Défiler'}</span>
              </button>
            </div>

            {/* Hero Right Visual: The Split Circular Mask Artwork */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroArtwork />
            </div>

          </div>
        </div>
      </section>

      {/* 2. DARK STRIP: WHAT WE DO */}
      <section id="home-what-we-do" className="bg-[#121212] text-white py-16 lg:py-20 border-b border-[#232220]">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'What We Do' : 'Notre Métier'}
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-white mb-5">
                {lang === 'en' ? (
                  <>
                    We imagine.<br />
                    We create.<br />
                    We produce.
                  </>
                ) : (
                  <>
                    Nous imaginons.<br />
                    Nous créons.<br />
                    Nous produisons.
                  </>
                )}
              </h2>

              <button
                onClick={() => onNavigate('what-we-do')}
                className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.16em] text-[#b24b27] hover:text-[#d6653d] transition-colors cursor-pointer group"
              >
                <span>{lang === 'en' ? 'Learn More' : 'En Savoir Plus'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 4 Pillars Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="border-l border-[#2e2b27] pl-5">
                <div className="text-[#b24b27] mb-3">
                  <Clapperboard size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xs uppercase font-bold tracking-[0.14em] text-white mb-2">
                  {lang === 'en' ? 'Events & Festivals' : 'Événements & Festivals'}
                </h4>
                <p className="text-xs text-[#9f9b94] leading-relaxed">
                  {lang === 'en'
                    ? 'Designing and producing cultural events that bring people together.'
                    : 'Concevoir et produire des événements culturels qui rassemblent les publics.'}
                </p>
              </div>

              {/* Card 2 */}
              <div className="border-l border-[#2e2b27] pl-5">
                <div className="text-[#b24b27] mb-3">
                  <Drama size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xs uppercase font-bold tracking-[0.14em] text-white mb-2">
                  {lang === 'en' ? 'Performing Arts' : 'Arts Vivants'}
                </h4>
                <p className="text-xs text-[#9f9b94] leading-relaxed">
                  {lang === 'en'
                    ? 'Supporting creation and diffusion of theatre, dance, music and beyond.'
                    : 'Accompagner la création et la diffusion de théâtre, danse et musique.'}
                </p>
              </div>

              {/* Card 3 */}
              <div className="border-l border-[#2e2b27] pl-5">
                <div className="text-[#b24b27] mb-3">
                  <Video size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xs uppercase font-bold tracking-[0.14em] text-white mb-2">
                  {lang === 'en' ? 'Audiovisual Production' : 'Production Audiovisuelle'}
                </h4>
                <p className="text-xs text-[#9f9b94] leading-relaxed">
                  {lang === 'en'
                    ? 'Developing documentaries, films and digital content with a unique voice.'
                    : 'Développer des documentaires, films et créations avec un regard singulier.'}
                </p>
              </div>

              {/* Card 4 */}
              <div className="border-l border-[#2e2b27] pl-5">
                <div className="text-[#b24b27] mb-3">
                  <Globe2 size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xs uppercase font-bold tracking-[0.14em] text-white mb-2">
                  {lang === 'en' ? 'Cultural Bridges' : 'Ponts Culturels'}
                </h4>
                <p className="text-xs text-[#9f9b94] leading-relaxed">
                  {lang === 'en'
                    ? 'Building connections between artists, audiences and institutions worldwide.'
                    : 'Tisser des liens entre artistes, publics et institutions à travers le monde.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#e4dfd5] pb-4 mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27]">
                {lang === 'en' ? 'Featured Projects' : 'Projets Phares'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mt-1" />
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.15em] text-[#b24b27] hover:text-[#913a1b] transition-colors cursor-pointer group"
            >
              <span>{lang === 'en' ? 'View All Projects' : 'Tous les Projets'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group flex flex-col cursor-pointer bg-transparent"
              >
                {/* Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#e5dfd5] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Content */}
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
                  <span>{lang === 'en' ? 'Discover' : 'Découvrir'}</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ABOUT US TEASER STRIP */}
      <section className="border-t border-[#e4dfd5]">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-[#e4dfd5] shadow-xs">
            
            {/* Left: Parisian Courtyard / Arches Photography */}
            <div className="lg:col-span-6 min-h-[360px] lg:min-h-[460px] relative bg-[#e5dfd5]">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                alt="Parisian Architecture & Classical Arches"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#3b291d]/10 mix-blend-multiply" />
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 bg-[#f3efe6] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'About Us' : 'À Propos'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-[#1d1b18] mb-6">
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

              <p className="text-sm sm:text-base text-[#615c54] leading-relaxed mb-8 font-light">
                {lang === 'en'
                  ? 'Terra Culture Lab is a creative production company based in Paris, working at the crossroads of arts, culture and society. We believe in the power of stories to connect, to question and to transform.'
                  : 'Terra Culture Lab est une structure de production créative basée à Paris, au croisement des arts, de la culture et de la société. Nous croyons au pouvoir des récits pour relier, questionner et transformer.'}
              </p>

              <div>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.16em] text-[#b24b27] hover:text-[#913a1b] transition-colors cursor-pointer group"
                >
                  <span>{lang === 'en' ? 'More About Us' : 'En Savoir Plus'}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
