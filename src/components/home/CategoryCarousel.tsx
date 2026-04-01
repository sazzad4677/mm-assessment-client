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
    <section className="relative w-full pt-2 pb-12 bg-gradient-to-b from-[#ede9d3] from-[20%] to-white to-[60%] font-sans">
      <div className="relative max-w-[1500px] mx-auto px-4">
        <button
          onClick={scrollLeft}
          className="absolute -left-2 md:-left-6 lg:-left-10 xl:-left-12 top-1/2 -translate-y-1/2 z-20 bg-transparent border-none hidden md:flex"
          aria-label="Previous category"
        >
          <Image
            src="/icons/right-arrow.svg"
            alt="Previous"
            width={18}
            height={18}
            className="rotate-180 cursor-pointer hover:opacity-70 transition-opacity"
          />
        </button>

        <button
          onClick={scrollRight}
          className="absolute -right-2 md:-right-6 lg:-right-10 xl:-right-12 top-1/2 -translate-y-1/2 z-20 bg-transparent border-none hidden md:flex"
          aria-label="Next category"
        >
          <Image
            src="/icons/right-arrow.svg"
            alt="Next"
            width={18}
            height={18}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </button>

        {/* Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-auto gap-6 sm:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="shrink-0 w-[260px] sm:w-[280px] lg:w-[320px] snap-start"
            >
              <CategoryCard
                image={cat.image}
                title={cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                href={`/category/${encodeURIComponent(cat.name)}`}
              />
            </div>
          ))}
        </div>

        {/* Constrained bottom border matching the category items width */}
        <div className="w-full border-b border-gray-300 mt-4 sm:mt-6"></div>
      </div>
    </section>
  );
}
