import React from 'react';

interface MemeCardProps {
  quote: string;
  background: string;
}

export const MemeCard: React.FC<MemeCardProps> = ({ quote, background }) => {
  return (
    <div className="aspect-square w-full max-w-xl mx-auto relative rounded-xl overflow-hidden shadow-2xl">
      <img
        src={background}
        alt="Motivational background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <p className="text-white text-2xl md:text-3xl font-bold text-center leading-relaxed drop-shadow-lg">
          {quote}
        </p>
      </div>
    </div>
  );
};