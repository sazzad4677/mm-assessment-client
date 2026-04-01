import Image from 'next/image';
import Button from './Button';
import PriceDisplay from './PriceDisplay';

export interface ProductCardProps {
  image: string;
  brandName: string;
  productName: string;
  originalPrice?: number;
  currentPrice: number;
}

export default function ProductCard({
  image,
  brandName,
  productName,
  originalPrice,
  currentPrice,
}: ProductCardProps) {
  return (
    <div className="bg-bg-main border border-btn-gray/30 p-3 flex flex-col h-full font-sans transition-shadow duration-300 hover:shadow-md">
      {/* Brand & Title — ABOVE image (Figma layout) */}
      <span className="text-[11px] text-input-placeholder block truncate">
        {brandName}
      </span>
      <h3 className="text-[12px] text-accent-primary font-normal line-clamp-1 mt-0.5 mb-2">
        {productName}
      </h3>

      {/* Image Container */}
      <div className="w-full h-[100px] flex items-center justify-center bg-white">
        <Image
          src={image}
          alt={productName}
          width={140}
          height={100}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Price & Button — below image */}
      <div className="mt-3">
        <PriceDisplay
          price={currentPrice}
          originalPrice={originalPrice}
          className="text-sm"
        />
        <Button variant="primary" className="w-full mt-2 text-sm py-1.5">
          Add to cart
        </Button>
      </div>
    </div>
  );
}
