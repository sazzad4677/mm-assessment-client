import Button from '@/components/ui/Button';
import PriceDisplay from '@/components/ui/PriceDisplay';
import IconButtonBadge from '@/components/ui/IconButtonBadge';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import CategoryCard from '@/components/ui/CategoryCard';
import HeroBanner from '@/components/ui/HeroBanner';
import BestDealsSection from '@/components/home/BestDealsSection';

import {
  getCategories,
  getProductsByCategory,
} from '@/app/actions/product.action';

export default async function Home() {
  // get all categories
  const categories = await getCategories();

  // get first category products
  const initialCategoryName = categories.length > 0 ? categories[0].name : '';
  const initialProducts = initialCategoryName
    ? await getProductsByCategory(initialCategoryName)
    : [];

  return (
    <>
      <HeroBanner />
      <div className="flex flex-col gap-6 p-4 md:p-10 bg-white">
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

        <BestDealsSection
          initialProducts={initialProducts}
          categories={categories}
        />

        <div className="w-full max-w-[1400px] mx-auto mt-12 px-4 md:px-10 lg:px-0">
          <SectionTitle
            highlightWord="Shop"
            mainText="by Category"
            className="mb-6"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <CategoryCard
                key={cat.id}
                image={
                  idx % 2 === 0
                    ? '/demo-images/category-demo.png'
                    : '/demo-images/category-demo-2.png'
                }
                title={cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                href={`/category/${encodeURIComponent(cat.name)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
