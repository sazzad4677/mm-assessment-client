import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  image: string;
  title: string;
  href: string;
}

export default function CategoryCard({
  image,
  title,
  href,
}: CategoryCardProps) {
  return (
    <div className="relative w-full pl-[12px] mt-4 mb-4">
      <Link href={href} className="group block relative w-full">
        {/* Main Image Container */}
        <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shadow-sm">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>

        {/* Floating White Label Box with 3D Fold Ribbon Effect */}
        <div className="absolute bottom-[16px] xl:bottom-[24px] -left-[12px] right-[24px] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.12)] flex justify-between items-center py-[14px] px-[20px] xl:py-[18px] xl:px-[24px] z-10 transition-transform duration-300 group-hover:-translate-y-1 gap-3 sm:gap-4">
          {/* 3D Fold Dark Triangle */}
          <svg
            className="absolute -top-[10px] left-0 w-[12px] h-[10px]"
            viewBox="0 0 12 10"
            aria-hidden="true"
          >
            {/* Creates a right triangle pointing down/left*/}
            <polygon points="0,10 12,10 12,0" fill="#281a12" />
          </svg>

          <span className="font-sans font-normal text-black flex-1 text-[18px] lg:text-[20px] xl:text-[22px] leading-tight tracking-tight line-clamp-2">
            {title}
          </span>
          <span className="font-sans font-normal text-[#14B1F0] text-[16px] lg:text-[18px] xl:text-[20px] leading-none whitespace-nowrap flex-shrink-0">
            Shop
          </span>
        </div>
      </Link>
    </div>
  );
}
