'use client';

import { useState, useTransition } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import TabNavigation from '@/components/ui/TabNavigation';
import ProductCard from '@/components/ui/ProductCard';
import { Product, Category } from '@/types/api';
import { getProductsByCategory } from '@/app/actions/product.action';

interface BestDealsSectionProps {
  initialProducts: Product[];
  categories: Category[];
}

export default function BestDealsSection({
  initialProducts,
  categories,
}: BestDealsSectionProps) {
  // Extract category names for the TabNavigation
  const tabNames = categories.map((c) => c.name);

  // Track active tab and products
  const [activeTab, setActiveTab] = useState(tabNames[0] || '');
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // transition to keep the UI responsive while fetching a new category on the server
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    startTransition(async () => {
      try {
        const fetchedProducts = await getProductsByCategory(newTab);
        setProducts(fetchedProducts.slice(0, 12));
      } catch (error) {
        console.error('Failed fetching category products', error);
        setProducts([]); // clear stale data so empty-state is shown
      }
    });
  };

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="w-full mx-auto px-4 md:px-8 xl:px-20">
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 md:mb-10 gap-4 md:gap-6 w-full">
          <SectionTitle
            highlightWord="Best"
            mainText="Deals"
            className="flex-shrink-0 px-4 md:px-0"
          />
          <div className="w-full lg:flex-1 lg:min-w-0 overflow-hidden flex lg:justify-end">
            {tabNames.length > 0 && (
              <TabNavigation
                tabs={tabNames}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                className="px-4 md:px-0 lg:px-0"
              />
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 px-4 md:px-0 transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              brandName={product.category}
              productName={product.title}
              currentPrice={product.price}
              originalPrice={Number((product.price * 1.2).toFixed(2))}
            />
          ))}
          {products.length === 0 && !isPending && (
            <div className="col-span-full py-10 text-center text-text-muted">
              No products found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
