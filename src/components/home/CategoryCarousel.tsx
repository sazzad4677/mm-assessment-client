'use client';

import { useRef } from 'react';
import Image from 'next/image';
import CategoryCard from '@/components/ui/CategoryCard';

export interface CategoryWithImage {
  id: number;
  name: string;
  image: string;
}

interface CategoryCarouselProps {
  categories: CategoryWithImage[];
}

export default function CategoryCarousel({
  categories,
}: CategoryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full pt-4 md:pt-2 pb-8 md:pb-12 bg-gradient-to-b from-[#ede9d3] from-[20%] to-white to-[60%] font-sans">
      {/* Outer wrapper with side padding to leave room for arrows */}
      <div className="relative w-full px-8 md:px-10 xl:px-14">
        {/* Left Arrow — always visible */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 md:left-1 xl:left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-white/80 rounded-full shadow-sm hover:bg-white transition"
          aria-label="Previous category"
        >
          <Image
            src="/icons/right-arrow.svg"
            alt="Previous"
            width={14}
            height={14}
            className="rotate-180 w-3 h-3 md:w-3.5 md:h-3.5"
          />
        </button>

        {/* Right Arrow — always visible */}
        <button
          onClick={scrollRight}
          className="absolute right-0 md:right-1 xl:right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-white/80 rounded-full shadow-sm hover:bg-white transition"
          aria-label="Next category"
        >
          <Image
            src="/icons/right-arrow.svg"
            alt="Next"
            width={14}
            height={14}
            className="w-3 h-3 md:w-3.5 md:h-3.5"
          />
        </button>

        {/* Carousel Track — overflow hidden, partial card visible on edge */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-auto gap-3 md:gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth pb-4"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="shrink-0 w-[220px] sm:w-[250px] md:w-[270px] lg:w-[290px] snap-start"
            >
              <CategoryCard
                image={cat.image}
                title={cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                href={`/category/${encodeURIComponent(cat.name)}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="w-full border-b border-gray-300 mt-2 hidden md:block"></div>
      </div>
    </section>
  );
}
