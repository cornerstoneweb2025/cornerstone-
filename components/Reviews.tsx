import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-luxury-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">What Our Clients Say</h2>
        <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
         {/* Fade masks */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-luxury-charcoal to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-luxury-charcoal to-transparent z-10 pointer-events-none"></div>

        {/* Scroll Track - Moving Left to Right as requested (technically correct term is scrolling right, so text moves left? 
            No, "reviews must continuously move from left to right" usually means they enter from left and exit right?
            Or typical ticker usually goes right-to-left. 
            Instruction: "Reviews must continuously move from left to right". 
            I will interpret this as the content translates +X direction. */}
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
          {/* First set */}
          <div className="flex gap-8 px-4">
            {REVIEWS.map((review) => (
              <ReviewCard key={`r1-${review.id}`} review={review} />
            ))}
          </div>
          {/* Duplicate set for loop */}
          <div className="flex gap-8 px-4">
            {REVIEWS.map((review) => (
              <ReviewCard key={`r2-${review.id}`} review={review} />
            ))}
          </div>
           {/* Triplicate set for loop smoothness on wide screens */}
           <div className="flex gap-8 px-4">
            {REVIEWS.map((review) => (
              <ReviewCard key={`r3-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{ review: any }> = ({ review }) => (
  <div className="w-[350px] md:w-[450px] p-8 bg-luxury-dark border border-white/5 hover:border-gold-500/50 transition-colors duration-300 flex-shrink-0 flex flex-col justify-between">
    <div>
      <Quote className="w-8 h-8 text-gold-500 mb-6 opacity-50" />
      <p className="text-xl md:text-2xl font-serif text-gray-200 italic leading-relaxed mb-6">
        "{review.text}"
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-amber-700 flex items-center justify-center text-luxury-black font-bold">
        {review.author[0]}
      </div>
      <div>
        <h4 className="text-white font-semibold">{review.author}</h4>
        <p className="text-gold-500/80 text-sm uppercase tracking-wider">{review.company}</p>
      </div>
    </div>
  </div>
);

export default Reviews;