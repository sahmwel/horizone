import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[72vh] md:h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/30" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="w-full md:w-1/2 text-white">
          <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
            Destination
          </span>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Exploring the Wonders of Hiking
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/80 max-w-lg">
            An iconic landmark, this post unveils the secrets that make this
            destination a traveler's paradise.
          </p>
        </div>

        {/* author card on right side bottom */}
        <div className="absolute right-10 bottom-10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-white/80" />
          <div className="text-sm">
            <div className="font-semibold">Theodoro Reginald</div>
            <div className="text-xs text-white/80">24 Jan 2024 · 10 mins read</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
