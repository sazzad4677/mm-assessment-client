'use client';

import { useRef, useEffect, useState } from 'react';
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
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    // Basic check to see if we need scroll controls
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowControls(scrollWidth > clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [categories]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full pt-4 md:pt-2 pb-8 md:pb-12 bg-gradient-to-b from-[#ede9d3] from-[20%] to-white to-[60%] font-sans overflow-hidden">
      <div className="relative w-full mx-auto px-4 md:px-8 xl:px-20">
        {showControls && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-0 md:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 md:bg-transparent shadow-md md:shadow-none w-8 h-8 md:w-auto md:h-auto rounded-full hidden md:flex items-center justify-center border-none"
              aria-label="Previous category"
            >
              <Image
                src="/icons/right-arrow.svg"
                alt="Previous"
                width={16}
                height={16}
                className="rotate-180 cursor-pointer hover:opacity-70 transition-opacity md:w-[18px] md:h-[18px]"
              />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 md:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 md:bg-transparent shadow-md md:shadow-none w-8 h-8 md:w-auto md:h-auto rounded-full hidden md:flex items-center justify-center border-none"
              aria-label="Next category"
            >
              <Image
                src="/icons/right-arrow.svg"
                alt="Next"
                width={16}
                height={16}
                className="cursor-pointer hover:opacity-70 transition-opacity md:w-[18px] md:h-[18px]"
              />
            </button>
          </>
        )}

        {/* Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-auto gap-4 sm:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth pb-4"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] snap-start"
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
        <div className="w-full border-b border-gray-300 mt-2 sm:mt-6 hidden md:block"></div>
      </div>
    </section>
  );
}
