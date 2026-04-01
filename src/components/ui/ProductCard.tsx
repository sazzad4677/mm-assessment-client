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
    <div className="bg-bg-main border border-btn-gray/30 p-4 flex flex-col h-full font-sans transition-shadow duration-300 hover:shadow-md">
      {/* Image Container mapped to Figma dimensions */}
      <div className="w-full h-[129px] flex items-center justify-center">
        <Image
          src={image}
          alt={productName}
          width={158}
          height={129}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Text Content Wrapper */}
      <div className="flex-grow flex flex-col">
        <span className="text-sm text-input-placeholder mt-4 block">
          {brandName}
        </span>
        <h3 className="text-base text-footer font-normal line-clamp-2 mt-1">
          {productName}
        </h3>

        {/* Pushes Price & Button to the bottom */}
        <div className="mt-auto pt-4">
          <PriceDisplay
            price={currentPrice}
            originalPrice={originalPrice}
            className="text-lg"
          />
          <Button variant="primary" className="w-full mt-4">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
