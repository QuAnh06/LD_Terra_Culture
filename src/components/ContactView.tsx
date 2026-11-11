import React, { useState } from 'react';
import { MapPin, Mail, Phone, Globe, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DottedWorldMap } from './DottedWorldMap';

interface ContactViewProps {
  lang: 'en' | 'fr';
}

export const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH PARIS BUILDING FACADE & BRASS PLAQUE */}
      <section className="relative overflow-hidden border-b border-[#e4dfd5] pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'Contact Us' : 'Contactez-Nous'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#1a1613] leading-[1.12] mb-6">
                {lang === 'en' ? (
                  <>
                    Let’s create<br />
                    something meaningful<br />
                    together.
                  </>
                ) : (
                  <>
                    Créons ensemble<br />
                    des œuvres qui ont<br />
                    du sens.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#666158] leading-relaxed max-w-lg font-light">
                {lang === 'en'
                  ? 'We are always open to new ideas, artistic collaborations and cross-cultural conversations from around the world.'
                  : 'Nous sommes constamment ouverts aux nouvelles idées, aux collaborations artistiques et aux dialogues interculturels.'}
              </p>
            </div>

            {/* Right: Parisian Building Arch Facade with Brass Plaque & Olive Tree */}
            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 w-full overflow-hidden border border-[#ded5c5] shadow-lg bg-[#e5dfd5]">
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80"
                  alt="Parisian Building Arch & Olive Tree"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Brass Plaque mounted on stone arch */}
                <div className="absolute top-[28%] right-[12%] brass-plaque px-6 py-5 rounded-none text-center transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="font-editorial-heading text-base sm:text-lg tracking-[0.2em] font-bold text-[#342417] leading-none uppercase">
                    TERRA
                    <span className="block font-editorial-serif text-[11px] tracking-[0.16em] lowercase font-normal text-[#4d3623] mt-0.5">
                      culture Lab
                    </span>
                  </div>
                  <div className="text-[7.5px] uppercase tracking-[0.14em] text-[#634932] italic font-editorial-serif mt-1 border-t border-[#b79c6d]/40 pt-1">
                    Where Ideas Meet the World
                  </div>
                </div>

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/30 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. GET IN TOUCH & SEND US A MESSAGE FORM */}
      <section className="py-16 lg:py-20 border-b border-[#e4dfd5]">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Info List */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'Get In Touch' : 'Coordonnées'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-8" />

              <div className="space-y-7">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#f1ece2] flex items-center justify-center text-[#b24b27] shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#b24b27] mb-1">
                      {lang === 'en' ? 'Address' : 'Adresse'}
                    </h5>
                    <p className="text-sm text-[#2b2722] leading-relaxed">
                      61, rue de Miromesnil<br />
                      75008 Paris, France
                    </p>
                    <span className="inline-block text-[10px] bg-[#eee6d8] text-[#7d654c] px-2 py-0.5 mt-1.5 uppercase tracking-wide">
                      {lang === 'en' ? 'Provisional: 15 rue Clapeyron (TBC)' : 'Provisoire : 15 rue Clapeyron'}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#f1ece2] flex items-center justify-center text-[#b24b27] shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#b24b27] mb-1">
                      Email
                    </h5>
                    <a
                      href="mailto:hello@terraculturelab.com"
                      className="text-sm text-[#2b2722] hover:text-[#b24b27] transition-colors"
                    >
                      hello@terraculturelab.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#f1ece2] flex items-center justify-center text-[#b24b27] shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#b24b27] mb-1">
                      {lang === 'en' ? 'Phone' : 'Téléphone'}
                    </h5>
                    <a
                      href="tel:+33142660773"
                      className="text-sm text-[#2b2722] hover:text-[#b24b27] transition-colors"
                    >
                      +33 (0)1 42 66 07 73
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#f1ece2] flex items-center justify-center text-[#b24b27] shrink-0 mt-0.5">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#b24b27] mb-1">
                      {lang === 'en' ? 'Website' : 'Site Web'}
                    </h5>
                    <span className="text-sm text-[#2b2722]">
                      www.terraculturelab.com
                    </span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#f1ece2] flex items-center justify-center text-[#b24b27] shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h5 className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#b24b27] mb-1">
                      {lang === 'en' ? 'Office Hours' : 'Horaires d’Ouverture'}
                    </h5>
                    <p className="text-sm text-[#2b2722]">
                      {lang === 'en'
                        ? 'Monday – Friday, 9:30 AM – 6:30 PM (CET)'
                        : 'Lundi – Vendredi, 9h30 – 18h30 (CET)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7 bg-[#fbf9f5] border border-[#e4dfd5] p-8 sm:p-10">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                {lang === 'en' ? 'Send Us a Message' : 'Envoyez-Nous un Message'}
              </span>
              <div className="w-8 h-[2px] bg-[#b24b27] mb-6" />

              {submitted ? (
                <div className="bg-[#eef5ee] border border-[#c4e0c4] p-6 text-center space-y-3">
                  <CheckCircle2 size={36} className="text-[#2c6e49] mx-auto" />
                  <h4 className="font-editorial-serif text-2xl font-semibold text-[#1d1b18]">
                    {lang === 'en' ? 'Thank You!' : 'Merci !'}
                  </h4>
                  <p className="text-xs text-[#3f5d47] max-w-md mx-auto leading-relaxed">
                    {lang === 'en'
                      ? 'Your message has been received by our Paris and Hanoi offices. We will respond promptly.'
                      : 'Votre message a bien été transmis à nos équipes de Paris et Hanoi. Nous reviendrons vers vous dans les meilleurs délais.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'en' ? 'Your Name *' : 'Votre Nom *'}
                        className="w-full bg-[#fdfcf9] border border-[#e4dfd5] px-4 py-3 text-xs sm:text-sm text-[#1d1b18] placeholder:text-[#8c8276] outline-none focus:border-[#b24b27] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={lang === 'en' ? 'Your Email *' : 'Votre Email *'}
                        className="w-full bg-[#fdfcf9] border border-[#e4dfd5] px-4 py-3 text-xs sm:text-sm text-[#1d1b18] placeholder:text-[#8c8276] outline-none focus:border-[#b24b27] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={lang === 'en' ? 'Subject' : 'Objet'}
                      className="w-full bg-[#fdfcf9] border border-[#e4dfd5] px-4 py-3 text-xs sm:text-sm text-[#1d1b18] placeholder:text-[#8c8276] outline-none focus:border-[#b24b27] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'en' ? 'Your Message *' : 'Votre Message *'}
                      className="w-full bg-[#fdfcf9] border border-[#e4dfd5] px-4 py-3 text-xs sm:text-sm text-[#1d1b18] placeholder:text-[#8c8276] outline-none focus:border-[#b24b27] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#b24b27] hover:bg-[#913a1b] text-white text-xs font-semibold uppercase tracking-[0.16em] py-4 inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
                  >
                    <span>{lang === 'en' ? 'Send Message' : 'Envoyer le Message'}</span>
                    <ArrowRight size={15} />
                  </button>

                  <p className="text-[11px] text-[#8c8276] leading-relaxed pt-1">
                    {lang === 'en'
                      ? 'Your information will be kept strictly confidential and used only to respond to your enquiry.'
                      : 'Vos coordonnées restent strictement confidentielles et ne seront utilisées que pour répondre à votre demande.'}
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHERE WE ARE: PARIS, HANOI, WORLDWIDE */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1260px] mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Text & Mini Map Vector */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b24b27] block mb-2">
                  {lang === 'en' ? 'Where We Are' : 'Nos Implantations'}
                </span>
                <div className="w-8 h-[2px] bg-[#b24b27] mb-4" />

                <h2 className="font-editorial-serif text-3xl sm:text-4xl leading-tight text-[#1a1613]">
                  {lang === 'en' ? (
                    <>
                      A global vision,<br />
                      local presence.
                    </>
                  ) : (
                    <>
                      Une vision globale,<br />
                      un ancrage local.
                    </>
                  )}
                </h2>
              </div>

              {/* Dotted World Map with Paris & Hanoi pins */}
              <div className="pt-6 w-full max-w-[320px]">
                <DottedWorldMap showArcs={true} highlightPins={true} />
              </div>
            </div>

            {/* Col 2: PARIS */}
            <div className="bg-[#fbf9f5] border border-[#e4dfd5] flex flex-col overflow-hidden group">
              <div className="aspect-4/3 overflow-hidden bg-[#e5dfd5]">
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
                  alt="Parisian Building"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-2">
                    Paris, France
                  </h4>
                  <p className="text-xs text-[#6e685f] leading-relaxed">
                    61, rue de Miromesnil<br />
                    75008 Paris, France
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#ede7db] text-xs text-[#8c8276] space-y-1">
                  <div>+33 (0)1 42 66 07 73</div>
                  <div className="text-[#b24b27] font-medium">paris@terraculturelab.com</div>
                  <span className="inline-block text-[9.5px] bg-[#eee6d8] text-[#7d654c] px-2 py-0.5 mt-1 uppercase tracking-wide">
                    Provisional: 15 rue Clapeyron
                  </span>
                </div>
              </div>
            </div>

            {/* Col 3: HANOI */}
            <div className="bg-[#fbf9f5] border border-[#e4dfd5] flex flex-col overflow-hidden group">
              <div className="aspect-4/3 overflow-hidden bg-[#e5dfd5]">
                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
                  alt="Hanoi Turtle Lake Temple"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-2">
                    Hanoi, Vietnam
                  </h4>
                  <p className="text-xs text-[#6e685f] leading-relaxed">
                    24, Hang Bai Street<br />
                    Hoan Kiem District<br />
                    Hanoi, Vietnam
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#ede7db] text-xs text-[#8c8276] space-y-1">
                  <div>+84 24 39 33 02 15</div>
                  <div className="text-[#b24b27] font-medium">hanoi@terraculturelab.com</div>
                  <span className="inline-block text-[9.5px] bg-[#eee6d8] text-[#7d654c] px-2 py-0.5 mt-1 uppercase tracking-wide">
                    Provisional: Phùng Hưng St
                  </span>
                </div>
              </div>
            </div>

            {/* Col 4: WORLDWIDE */}
            <div className="bg-[#fbf9f5] border border-[#e4dfd5] flex flex-col overflow-hidden group">
              <div className="aspect-4/3 overflow-hidden bg-[#e5dfd5]">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
                  alt="International Skyline"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-[0.16em] text-[#1d1b18] mb-2">
                    Worldwide
                  </h4>
                  <p className="text-xs text-[#6e685f] leading-relaxed">
                    {lang === 'en'
                      ? 'Our projects travel and connect audiences in Europe, Asia, and the Americas.'
                      : 'Nos projets voyagent et relient les publics en Europe, Asie et Amériques.'}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#ede7db] text-xs">
                  <div className="text-[#b24b27] font-medium">partnerships@terraculturelab.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Closing Statement */}
          <div className="text-center pt-8 border-t border-[#e4dfd5]">
            <p className="font-editorial-serif text-lg sm:text-xl italic text-[#5c564e]">
              {lang === 'en'
                ? 'We travel, collaborate and build bridges between cultures.'
                : 'Nous voyageons, collaborons et tissons des ponts entre les cultures.'}
              <br />
              <strong className="text-[#b24b27] not-italic font-medium">
                {lang === 'en' ? 'Wherever ideas meet the world.' : 'Là où les idées rencontrent le monde.'}
              </strong>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
