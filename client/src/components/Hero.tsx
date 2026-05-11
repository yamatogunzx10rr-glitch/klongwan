import { ChevronDown } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 73, 101, 0.3), rgba(27, 73, 101, 0.3)), url(${backgroundImage})`,
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white max-w-3xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest mb-4 font-medium opacity-90">
          Your Serene Escape
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Let's Relax & Unwind by the Sea
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-95 font-light">
          Experience the ultimate luxury beach resort with world-class amenities and unforgettable moments
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
            Book Your Stay
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300">
            Explore More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </div>
    </section>
  );
}
