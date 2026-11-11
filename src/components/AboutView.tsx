import React from 'react';
import { PageView } from './Navbar';
import { HeroArtwork } from './HeroArtwork';
import { TEAM_MEMBERS } from '../data/content';
import { Sprout, Compass, Users2, Globe2, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: PageView) => void;
  lang: 'en' | 'fr';
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, lang }) => {
  return (
    <div className="w-full">
      {/* 1. ABOUT HERO */}
      <section className="relative overflow-hidden border-b border-[#e4dfd5] pt-12 pb-20">
        <div className="world-map-backdrop opacity-30" />

        <div className="max-w-[1260px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'About Us' : 'À Propos'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1a1613] leading-tight mb-6">
                {lang === 'en' ? (
                  <>
                    About<br />
                    Terra Culture Lab
                  </>
                ) : (
                  <>
                    À Propos de<br />
                    Terra Culture Lab
                  </>
                )}
              </h1>

              <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#b24b27] mb-4">
                {lang === 'en' ? 'Rooted in culture. Open to the world.' : 'Enracinés dans la culture. Ouverts sur le monde.'}
              </div>

              <p className="text-base sm:text-lg text-[#666158] leading-relaxed max-w-lg font-light mb-8">
                {lang === 'en'
                  ? 'Terra Culture Lab is a creative production company based in Paris, working at the crossroads of arts, culture and society.'
                  : 'Terra Culture Lab est une société de production créative basée à Paris, œuvrant au croisement des arts, de la culture et de la société.'}
              </p>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <span>{lang === 'en' ? 'Connect With Us' : 'Nous Contacter'}</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right Hero Artwork */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroArtwork />
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 lg:py-24 border-b border-[#e4dfd5]">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo: Ceramic Art Vase */}
            <div className="lg:col-span-5 aspect-4/3 overflow-hidden bg-[#e5dfd5] shadow-md border border-[#ded5c5]">
              <img
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
                alt="Clay Ceramic Vase & Organic Craftsmanship"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'Who We Are' : 'Qui Sommes-Nous'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight text-[#1a1613] mb-6">
                {lang === 'en' ? (
                  <>
                    We are storytellers,<br />
                    culture shapers, and bridge builders.
                  </>
                ) : (
                  <>
                    Nous sommes des conteurs,<br />
                    des créateurs et des bâtisseurs de ponts.
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-[#615c54] leading-relaxed mb-6 font-light">
                {lang === 'en'
                  ? 'We believe in the power of stories to connect people. Through artistic production, cultural projects and creative collaboration, we bring ideas to life and create meaningful experiences that inspire dialogue and new perspectives.'
                  : 'Nous croyons profondément au pouvoir des histoires pour rapprocher les êtres humains. Par la production scénique, les résidences et l’accompagnement de créateurs, nous donnons corps à des expériences qui suscitent le questionnement et l’émotion.'}
              </p>

              <p className="text-sm sm:text-base text-[#615c54] leading-relaxed font-light">
                {lang === 'en'
                  ? 'Operating between Europe and Asia with established hubs in Paris and Hanoi, our team partners with leading theatres, institutions, and festivals to amplify genuine voices.'
                  : 'Présents entre l’Europe et l’Asie à travers nos antennes de Paris et Hanoi, nous collaborons avec les théâtres, musées et festivals de référence pour faire résonner des voix singulières.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="py-20 bg-[#f1ece2] border-b border-[#e4dfd5]">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
              {lang === 'en' ? 'Our Values' : 'Nos Valeurs'}
            </span>
            <div className="w-8 h-[2px] bg-[#b24b27] mx-auto mb-4" />
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1a1613]">
              {lang === 'en' ? 'The Principles That Guide Us' : 'Les Principes Qui Nous Guident'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-[#fbf9f5] border border-[#e4dfd5] p-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#eee6d8] flex items-center justify-center text-[#b24b27] mb-5">
                <Sprout size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-3">
                {lang === 'en' ? 'Rooted' : 'Enracinés'}
              </h3>
              <p className="text-xs text-[#6e685f] leading-relaxed">
                {lang === 'en'
                  ? 'We draw strength from cultural heritage, craft traditions and authentic local identities.'
                  : 'Nous puisons notre force dans le patrimoine vivant, les savoir-faire et les identités locales.'}
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#fbf9f5] border border-[#e4dfd5] p-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#eee6d8] flex items-center justify-center text-[#b24b27] mb-5">
                <Compass size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-3">
                {lang === 'en' ? 'Curious' : 'Curieux'}
              </h3>
              <p className="text-xs text-[#6e685f] leading-relaxed">
                {lang === 'en'
                  ? 'We explore new ideas, experimental forms and daring collaborations without borders.'
                  : 'Nous explorons de nouvelles formes, des écritures hybrides et des collaborations sans frontières.'}
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#fbf9f5] border border-[#e4dfd5] p-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#eee6d8] flex items-center justify-center text-[#b24b27] mb-5">
                <Users2 size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-3">
                {lang === 'en' ? 'Collaborative' : 'Collaboratifs'}
              </h3>
              <p className="text-xs text-[#6e685f] leading-relaxed">
                {lang === 'en'
                  ? 'We believe the most inspiring creations emerge when diverse disciplines and sensibilities unite.'
                  : 'Nous croyons que les plus belles créations naissent de la rencontre entre talents complémentaires.'}
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-[#fbf9f5] border border-[#e4dfd5] p-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#eee6d8] flex items-center justify-center text-[#b24b27] mb-5">
                <Globe2 size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-3">
                {lang === 'en' ? 'Connecting' : 'Connecteurs'}
              </h3>
              <p className="text-xs text-[#6e685f] leading-relaxed">
                {lang === 'en'
                  ? 'We build enduring bridges connecting artists, audiences and institutions globally.'
                  : 'Nous tissons des ponts durables reliant les artistes, les publics et les institutions du monde.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
              {lang === 'en' ? 'Our Team' : 'Notre Équipe'}
            </span>
            <div className="w-8 h-[2px] bg-[#b24b27] mb-4" />
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1a1613]">
              {lang === 'en'
                ? 'A multidisciplinary team driven by passion and experience.'
                : 'Une équipe pluridisciplinaire animée par la passion et l’exigence.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="bg-white border border-[#eae5db] p-4 flex flex-col group">
                <div className="aspect-square overflow-hidden bg-[#e5dfd5] mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xs uppercase font-bold tracking-[0.14em] text-[#1d1b18] text-center mb-1">
                  {member.name}
                </h4>
                <p className="text-[11px] font-semibold text-[#b24b27] uppercase tracking-wider text-center mb-3">
                  {lang === 'en' ? member.role : member.roleFr}
                </p>
                <p className="text-xs text-[#6e685f] leading-relaxed text-center font-light">
                  {lang === 'en' ? member.bio : member.bioFr}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.16em] px-8 py-4 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
            >
              <span>{lang === 'en' ? 'Join Our Team' : 'Rejoindre l’Aventure'}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. FULL WIDTH QUOTE BANNER */}
      <section className="relative bg-[#191816] text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Atmospheric Landscape"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-[#121110]/75" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-light italic text-[#f3efe6] mb-6 leading-tight">
            “Where Ideas Meet the World.”
          </h2>
          <div className="w-12 h-[2px] bg-[#b24b27] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#c9c3b8] font-light tracking-wide">
            {lang === 'en' ? 'This is our journey. This is Terra.' : 'Ceci est notre voyage. Ceci est Terra.'}
          </p>
        </div>
      </section>
    </div>
  );
};
