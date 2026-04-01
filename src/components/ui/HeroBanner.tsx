import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/7] lg:aspect-[21/6] xl:aspect-[25/6] max-h-[400px] overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src="/images/hero-background.png"
          alt="Betafore Hero Header"
          fill
          priority
          sizes=""
          className="object-cover object-right lg:object-right w-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto h-full px-4 flex items-center">
        {/* Left Text Block */}
        <div className="max-w-xs md:max-w-md lg:max-w-xl">
          <h1 className="font-sans font-light text-[40px] md:text-[56px] lg:text-[72px] text-[#171717] leading-tight md:leading-tight lg:leading-[1.1] mb-4">
            Shop <span className="text-accent-primary">Computer</span>
            <br />& experience
          </h1>

          <p className="font-sans text-[12px] md:text-[14px] text-[#171717] leading-snug mb-8 max-w-[90%] md:max-w-[400px]">
            You Cannot Inspect Quality Into The Product; It Is Already There.
            <br />I Am Not A Product Of My Circumstances. I Am A Product Of My
            Decisions.
          </p>

          <Link
            href="/shop/computer"
            className="inline-flex items-center justify-center bg-accent-blue text-white font-sans font-normal text-[14px] md:text-[15px] px-8 md:px-10 py-3 rounded transition-opacity"
          >
            View More
          </Link>
        </div>
      </div>

      {/* 40% Off Floating Badge */}
      <div className="hidden sm:flex absolute -translate-y-[10%] top-[20%] md:top-[15%] lg:top-[18%] right-[12%] w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full bg-gradient-to-br from-[#FFAB00] to-[#FF8A00] flex-col items-center justify-center text-white pointer-events-none z-20">
        <span className="font-sans font-bold text-[40px] md:text-[52px] lg:text-[64px] leading-[0.9] mb-1">
          40%
        </span>
        <span className="font-sans font-normal text-[18px] md:text-[22px] lg:text-[28px] leading-none">
          Off
        </span>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-[20px] md:bottom-[30px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-10 w-full">
        <div className="w-8 h-2 rounded-full bg-header"></div>
        <div className="w-6 h-2 rounded-full bg-[#C4B7A6]"></div>
        <div className="w-6 h-2 rounded-full bg-[#C4B7A6]"></div>
      </div>
    </div>
  );
}
