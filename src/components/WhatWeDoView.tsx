import React from 'react';
import { PageView } from './Navbar';
import { HeroArtwork } from './HeroArtwork';
import { Search, Lightbulb, PenTool, Cog, Share2, ArrowRight } from 'lucide-react';

interface WhatWeDoViewProps {
  onNavigate: (view: PageView) => void;
  lang: 'en' | 'fr';
}

export const WhatWeDoView: React.FC<WhatWeDoViewProps> = ({ onNavigate, lang }) => {
  const expertise = [
    {
      titleEn: 'Events & Festivals',
      titleFr: 'Événements & Festivals',
      descEn: 'Designing and producing cultural events and festivals that bring people together and create memorable collective experiences.',
      descFr: 'Concevoir et produire des événements et festivals d’envergure qui fédèrent les publics et créent des souvenirs partagés.',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80',
    },
    {
      titleEn: 'Audiovisual Production',
      titleFr: 'Production Audiovisuelle',
      descEn: 'Producing documentaries, feature films and digital content with a unique artistic approach and global cinematic vision.',
      descFr: 'Produire des documentaires, longs-métrages et formats digitaux avec un regard d’auteur et une portée internationale.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
    },
    {
      titleEn: 'Performing Arts',
      titleFr: 'Arts Vivants',
      descEn: 'Supporting creation, touring and artistic diffusion in theatre, contemporary dance, traditional music, and cross-genre shows.',
      descFr: 'Accompagner la création, les tournées et la diffusion en théâtre, danse contemporaine et musiques du monde.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    },
    {
      titleEn: 'Cultural Exhibitions',
      titleFr: 'Expositions Culturelles',
      descEn: 'Curating, designing and mounting immersive exhibitions that narrate stories, celebrate living heritage and spark dialogue.',
      descFr: 'Commissariat, scénographie et production d’expositions immersives qui racontent des mémoires et invitent à l’échange.',
      image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=600&q=80',
    },
    {
      titleEn: 'Cultural Bridges & Collaborations',
      titleFr: 'Ponts & Co-Créations',
      descEn: 'Building bilateral partnerships between artists, academic conservatories, museums and cultural foundations across borders.',
      descFr: 'Développer des partenariats bilatéraux entre créateurs, conservatoires, musées et fondations à travers le globe.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const steps = [
    {
      number: '01',
      titleEn: 'Explore',
      titleFr: 'Explorer',
      descEn: 'We research, listen and dive deeply into narratives, oral histories and regional cultural contexts.',
      descFr: 'Nous enquêtons, écoutons et explorons les récits, archives et contextes culturels locaux.',
      icon: Search,
    },
    {
      number: '02',
      titleEn: 'Conceive',
      titleFr: 'Concevoir',
      descEn: 'We craft artistic concepts, dramaturgy and production architectures that resonate universally.',
      descFr: 'Nous élaborons des concepts artistiques, dramaturgies et cadres de production à vocation universelle.',
      icon: Lightbulb,
    },
    {
      number: '03',
      titleEn: 'Create',
      titleFr: 'Créer',
      descEn: 'We rehearse, compose and curate with top-tier stage directors, performers, and scenographers.',
      descFr: 'Nous répétons, composons et scénarisons avec des metteurs en scène et artistes d’exception.',
      icon: PenTool,
    },
    {
      number: '04',
      titleEn: 'Produce',
      titleFr: 'Produire',
      descEn: 'We manage logistical, technical and financial production with precision, transparency and ethics.',
      descFr: 'Nous pilotons la production technique, logistique et budgétaire avec rigueur et bienveillance.',
      icon: Cog,
    },
    {
      number: '05',
      titleEn: 'Share',
      titleFr: 'Diffuser',
      descEn: 'We connect projects with global audiences, media networks and educational institutions.',
      descFr: 'Nous partageons les créations avec les publics, les réseaux institutionnels et les médias.',
      icon: Share2,
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#e4dfd5] pt-12 pb-20">
        <div className="world-map-backdrop opacity-30" />

        <div className="max-w-[1260px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'Our Expertise' : 'Notre Expertise'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1a1613] leading-tight mb-6">
                {lang === 'en' ? 'What We Do' : 'Notre Métier'}
              </h1>

              <p className="text-base sm:text-lg text-[#666158] leading-relaxed max-w-lg font-light mb-8">
                {lang === 'en'
                  ? 'We imagine, design and produce cultural projects that connect people, inspire dialogue and open new perspectives across continents.'
                  : 'Nous imaginons, concevons et produisons des projets culturels qui rassemblent, inspirent le dialogue et ouvrent de nouveaux horizons.'}
              </p>

              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <span>{lang === 'en' ? 'View Our Portfolio' : 'Découvrir Nos Réalisations'}</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right Artwork */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroArtwork />
            </div>

          </div>
        </div>
      </section>

      {/* 2. 5 AREAS OF EXPERTISE CARDS */}
      <section className="py-20 lg:py-24 border-b border-[#e4dfd5]">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
              {lang === 'en' ? 'Areas of Expertise' : 'Domaines d’Intervention'}
            </span>
            <div className="w-8 h-[2px] bg-[#b24b27] mx-auto mb-4" />
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1a1613]">
              {lang === 'en' ? 'From Inception to Global Diffusion' : 'De l’Intuition à la Scène Internationale'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fbf9f5] border border-[#e4dfd5] flex flex-col overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="aspect-4/3 overflow-hidden bg-[#e5dfd5]">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-[0.14em] text-[#1d1b18] mb-2.5">
                      {lang === 'en' ? item.titleEn : item.titleFr}
                    </h4>
                    <p className="text-xs text-[#6e685f] leading-relaxed mb-4">
                      {lang === 'en' ? item.descEn : item.descFr}
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-[0.14em] text-[#b24b27] hover:text-[#913a1b] transition-colors cursor-pointer text-left"
                  >
                    <span>{lang === 'en' ? 'Inquire' : 'Échanger'}</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (5 STEPS WITH CONNECTING LINE) */}
      <section className="py-20 lg:py-24 bg-[#f8f5ee] border-b border-[#e4dfd5]">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
              {lang === 'en' ? 'Our Approach' : 'Notre Méthode'}
            </span>
            <div className="w-8 h-[2px] bg-[#b24b27] mx-auto mb-4" />
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1a1613]">
              {lang === 'en' ? 'How We Bring Ideas to Life' : 'Comment Nous Donnons Vie aux Idées'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting horizontal line on desktop */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[1px] bg-[#d8d2c4] z-0" />

            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center px-2"
                >
                  <div className="w-14 h-14 rounded-full bg-[#f8f5ee] border border-[#b24b27] flex items-center justify-center text-[#b24b27] mb-4 shadow-xs">
                    <IconComp size={22} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#b24b27] tracking-wider mb-1 block">
                    {step.number}
                  </span>
                  <h4 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-2">
                    {lang === 'en' ? step.titleEn : step.titleFr}
                  </h4>
                  <p className="text-xs text-[#6e685f] leading-relaxed max-w-[190px]">
                    {lang === 'en' ? step.descEn : step.descFr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WE BELIEVE CULTURE... QUOTE BANNER */}
      <section className="relative bg-[#191816] text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Nature backdrop"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-[#121110]/80" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#f3efe6] mb-6 leading-tight">
            {lang === 'en'
              ? 'We believe culture has the power to connect, to question and to transform.'
              : 'Nous croyons que la culture a le pouvoir de relier, d’interroger et de transformer.'}
          </h2>
          <div className="w-12 h-[2px] bg-[#b24b27] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#b8b1a5] font-light leading-relaxed max-w-xl mx-auto">
            {lang === 'en'
              ? 'Through creativity and collaboration, we help ideas travel, resonate and leave a lasting impression on audiences worldwide.'
              : 'Par la créativité et la coopération, nous aidons les œuvres à voyager, à résonner et à marquer durablement les mémoires.'}
          </p>
        </div>
      </section>
    </div>
  );
};
