interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  /**
   * Currency prefix. Defaults to "RS" per Figma specifications.
   */
  currency?: string;
  /**
   * Controls whether the primary selling price is bolded.
   */
  isBoldSellingPrice?: boolean;
  /**
   * Allows overriding container flex behaviors or text sizes from the parent.
   */
  className?: string;
}

export default function PriceDisplay({
  price,
  originalPrice,
  currency = 'RS',
  isBoldSellingPrice = false,
  className = '',
}: PriceDisplayProps) {
  // Helper to strictly format amounts
  const formatPrice = (value: number) => {
    return `${currency} ${value.toLocaleString('en-US')}`;
  };

  return (
    <div className={`flex items-center gap-3 font-sans ${className}`}>
      {/* Strikethrough Price */}
      {originalPrice !== undefined && originalPrice > 0 && (
        <span className="text-text-muted line-through font-normal">
          {formatPrice(originalPrice)}
        </span>
      )}

      {/* Active/Selling Price */}
      <span
        className={`text-price-active ${
          isBoldSellingPrice ? 'font-bold' : 'font-normal'
        }`}
      >
        {formatPrice(price)}
      </span>
    </div>
  );
}
