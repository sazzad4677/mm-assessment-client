import Button from '@/components/ui/Button';
import PriceDisplay from '@/components/ui/PriceDisplay';
import IconButtonBadge from '@/components/ui/IconButtonBadge';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-10">
      <div className="flex flex-wrap gap-4 items-center">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="gray">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
      </div>

      <div className="p-4 border rounded w-fit">
        <PriceDisplay price={56000} originalPrice={60000} />
      </div>

      {/* Wrapping the badge in the dark header background so the white cart icon is visible! */}
      <div className="bg-header p-6 rounded-md w-fit text-white">
        <IconButtonBadge
          icon={
            <Image
              src="/icons/shopping-cart.svg"
              alt="Cart"
              width={24}
              height={24}
            />
          }
          label="Cart"
          count={3}
        />
      </div>
    </div>
  );
}
