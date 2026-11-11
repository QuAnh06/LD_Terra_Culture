import React from 'react';

export const HeroArtwork: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center select-none">
      {/* Outer subtle decorative radial glow */}
      <div className="absolute w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full bg-radial from-[#e8decb]/50 to-transparent blur-xl pointer-events-none" />

      {/* Main Circular Mask Frame */}
      <div className="relative w-[300px] sm:w-[400px] lg:w-[440px] aspect-square rounded-full bg-[#ebe3d5] shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden border border-[#ded5c5]">
        
        {/* Split Image Composition */}
        <div className="w-full h-full flex relative">
          
          {/* LEFT HALF: Traditional Vietnamese Theatrical Mask / Opera Painting */}
          <div className="w-1/2 h-full overflow-hidden relative border-r-[1.5px] border-[#b24b27]/60 filter saturate-125 contrast-110">
            <img
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80"
              alt="Traditional Vietnamese Tuong Operatic Mask"
              className="absolute top-0 left-0 w-[200%] h-full object-cover max-w-none transform scale-110 -translate-x-[5%]"
              referrerPolicy="no-referrer"
            />
            {/* Ink wash & pigment texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b24b27]/15 to-[#8f3e20]/30 mix-blend-multiply pointer-events-none" />
          </div>

          {/* RIGHT HALF: Contemporary Asian Portrait / Ink Artistry */}
          <div className="w-1/2 h-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
              alt="Contemporary Asian Portrait"
              className="absolute top-0 -left-[100%] w-[200%] h-full object-cover max-w-none transform scale-110 -translate-x-[5%]"
              referrerPolicy="no-referrer"
            />
            {/* Subtle watercolor paper grain effect */}
            <div className="absolute inset-0 bg-[#fbf9f5]/10 mix-blend-soft-light pointer-events-none" />
          </div>
        </div>

        {/* Asian Calligraphic Ink Splatter and Terracotta Brush Ring */}
        <div
          className="absolute -inset-[5%] w-[110%] h-[110%] rounded-full border-[12px] sm:border-[16px] border-[#b24b27]/25 pointer-events-none rotate-[-28deg]"
          style={{
            borderTopColor: '#b24b27',
            borderRightColor: '#913a1b',
            borderBottomColor: 'transparent',
            borderLeftColor: '#d6653d',
          }}
        />

        {/* Center hairline seam accent */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#b24b27]/70 via-[#b24b27]/30 to-transparent" />
      </div>

      {/* Floating subtle ink droplet accents */}
      <div className="absolute -top-3 right-6 w-3 h-3 rounded-full bg-[#b24b27]/40 blur-[0.5px]" />
      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#29221b]/30" />
      <div className="absolute top-1/3 -left-4 w-4 h-4 rounded-full border border-[#b24b27]/30" />
    </div>
  );
};
