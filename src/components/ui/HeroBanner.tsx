import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-[21/7] xl:aspect-[25/7] min-h-[360px] md:min-h-[400px] lg:min-h-[450px] overflow-hidden bg-[#f4ebd0]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/hero-background.png"
          alt="Betafore Hero Header"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-right lg:object-right w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 w-full mx-auto h-full px-4 sm:px-6 md:px-8 xl:px-20 py-8 md:py-10 flex items-center">
        {/* Left Text Block */}
        <div className="max-w-[240px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-xl bg-white/40 lg:bg-transparent p-3 sm:p-4 lg:p-0 rounded-md lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none">
          <h1 className="font-sans font-light text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[72px] text-[#171717] leading-[1.1] mb-2 sm:mb-4">
            Shop <span className="text-accent-primary">Computer</span>
            <br />& experience
          </h1>

          <p className="font-sans text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#171717] leading-snug mb-4 sm:mb-6 md:mb-8 font-medium lg:font-normal drop-shadow-sm lg:drop-shadow-none">
            You Cannot Inspect Quality Into The Product; It Is Already There.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>I Am Not A Product Of My
            Circumstances. I Am A Product Of My Decisions.
          </p>

          <Link
            href="/shop/computer"
            className="inline-flex items-center justify-center bg-accent-blue text-white font-sans font-normal text-[13px] sm:text-[14px] md:text-[15px] px-6 sm:px-8 md:px-10 py-2 sm:py-3 lg:py-3.5 rounded transition-opacity"
          >
            View More
          </Link>
        </div>
      </div>

      {/* 40% Off Floating Badge */}
      <div className="flex absolute -translate-y-[10%] top-[10%] sm:top-[15%] md:top-[12%] lg:top-[15%] right-[5%] md:right-[10%] lg:right-[12%] w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] lg:w-[140px] lg:h-[140px] xl:w-[180px] xl:h-[180px] rounded-full bg-gradient-to-br from-[#FFAB00] to-[#FF8A00] flex-col items-center justify-center text-white pointer-events-none z-20 shadow-lg">
        <span className="font-sans font-bold text-[28px] sm:text-[32px] md:text-[44px] lg:text-[48px] xl:text-[64px] leading-[0.9] mb-1">
          40%
        </span>
        <span className="font-sans font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[28px] leading-none">
          Off
        </span>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-[10px] sm:bottom-[15px] md:bottom-[20px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-10 w-full">
        <div className="w-6 sm:w-8 h-1.5 sm:h-2 rounded-full bg-header"></div>
        <div className="w-4 sm:w-6 h-1.5 sm:h-2 rounded-full bg-[#C4B7A6]"></div>
        <div className="w-4 sm:w-6 h-1.5 sm:h-2 rounded-full bg-[#C4B7A6]"></div>
      </div>
    </div>
  );
}
