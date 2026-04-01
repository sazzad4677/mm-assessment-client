'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import PriceDisplay from '@/components/ui/PriceDisplay';
import IconButtonBadge from '@/components/ui/IconButtonBadge';
import Image from 'next/image';
import ProductCard from '@/components/ui/ProductCard';
import SectionTitle from '@/components/ui/SectionTitle';
import TabNavigation from '@/components/ui/TabNavigation';
import CategoryCard from '@/components/ui/CategoryCard';

const CATEGORIES = [
  'KITCHEN APPLIANCES',
  'CONSOLES',
  'TV & VIDEOS',
  'CELL PHONES',
  'GROCERY',
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  return (
    <div className="flex flex-col gap-6 p-10 bg-white">
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

      <div className="w-full max-w-[1400px] mx-auto mt-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-6 border-btn-gray/20 pb-2 xl:pb-0">
          <SectionTitle
            highlightWord="Best"
            mainText="Deals"
            className="flex-shrink-0"
          />
          <div className="w-full xl:w-auto xl:max-w-[70%] flex-grow">
            <TabNavigation
              tabs={CATEGORIES}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <ProductCard
            image="/demo-images/demo-tv.jpg"
            brandName="Bin Bakar Electronics"
            productName="Samsung 40N5300 S.."
            originalPrice={60000}
            currentPrice={56000}
          />
          <ProductCard
            image="/demo-images/demo-tv.jpg"
            brandName="Bin Bakar Electronics"
            productName="Samsung Automatic.."
            originalPrice={110000}
            currentPrice={101000}
          />
          <ProductCard
            image="/demo-images/demo-tv.jpg"
            brandName="Bin Bakar Electronics"
            productName="Haier HSU-12HFMAC .."
            originalPrice={56000}
            currentPrice={70000}
          />
          <ProductCard
            image="/demo-images/demo-tv.jpg"
            brandName="Bin Bakar Electronics"
            productName="Anex Roti Maker .."
            originalPrice={56000}
            currentPrice={70000}
          />
          <ProductCard
            image="/demo-images/demo-tv.jpg"
            brandName="Bin Bakar Electronics"
            productName="Gree GS-12FITH.."
            originalPrice={56000}
            currentPrice={86000}
          />
          <ProductCard
            image="/demo-images/demo-tv.jpg"
            brandName="Bin Bakar Electronics"
            productName="Gree Air Conditioner.."
            originalPrice={56000}
            currentPrice={171000}
          />
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto mt-12">
        <SectionTitle
          highlightWord="Shop"
          mainText="by Category"
          className="mb-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <CategoryCard
            image="/demo-images/category-demo.png"
            title="Electronics"
            href="/category/kitchen-appliances"
          />
          <CategoryCard
            image="/demo-images/category-demo-2.png"
            title="Fashion"
            href="/category/cell-phones"
          />
          <CategoryCard
            image="/demo-images/category-demo-2.png"
            title="Appliances"
            href="/category/cell-phones"
          />
          <CategoryCard
            image="/demo-images/category-demo-2.png"
            title="Babies Store"
            href="/category/cell-phones"
          />
        </div>
      </div>
    </div>
  );
}
