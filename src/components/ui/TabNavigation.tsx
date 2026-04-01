'use client';

import { useRef, useState, useEffect } from 'react';
import Button from './Button';

export interface TabNavigationProps {
  /** Array of tab strings to render */
  tabs: string[];
  /** The currently active tab */
  activeTab: string;
  /** Callback fired when a tab is clicked */
  onTabChange: (tab: string) => void;
  /** Optional classname for wrapper */
  className?: string;
}

export default function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}: TabNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [tabs]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`flex items-start justify-between w-full overflow-hidden ${className}`}
    >
      {/* Scrollable Tabs Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex flex-row overflow-x-auto gap-[35px] items-baseline w-full pr-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`whitespace-nowrap antialiased uppercase font-['Roboto',sans-serif] text-[19px] font-normal pb-2 border-b-[3px] transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-accent-primary border-accent-primary'
                  : 'text-black border-transparent hover:text-accent-primary'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Navigation Arrows Group (Hidden on very small screens where touch scrolling is natural) */}
      <div className="flex items-center gap-2 flex-shrink-0 ml-4 pt-[4px] hidden md:flex">
        <Button
          variant="gray"
          disabled={!canScrollLeft}
          onClick={() => scroll('left')}
          className={`!bg-transparent !px-2 !py-1 !min-w-0 !h-auto !rounded-none transition-colors cursor-pointer ${
            canScrollLeft
              ? '!text-footer hover:!text-accent-primary'
              : '!text-gray-300 !cursor-not-allowed'
          }`}
          aria-label="Scroll left"
        >
          {/* Solid Left Triangle */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 4l-10 8 10 8z" />
          </svg>
        </Button>
        <Button
          variant="gray"
          disabled={!canScrollRight}
          onClick={() => scroll('right')}
          className={`!bg-transparent !px-2 !py-1 !min-w-0 !h-auto !rounded-none transition-colors cursor-pointer ${
            canScrollRight
              ? '!text-footer hover:!text-accent-primary'
              : '!text-gray-300 !cursor-not-allowed'
          }`}
          aria-label="Scroll right"
        >
          {/* Solid Right Triangle */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 4l10 8-10 8z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
