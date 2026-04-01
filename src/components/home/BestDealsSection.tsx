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

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed fetching category products', error);
      }
    });
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto mt-10 px-4">
      {/* Header & Tabs */}
      <div className="flex flex-row items-end justify-between mb-10">
        <SectionTitle
          highlightWord="Best"
          mainText="Deals"
          className="flex-shrink-0"
        />
        {tabNames.length > 0 && (
          <TabNavigation
            tabs={tabNames}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        )}
      </div>

      {/* Product Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}
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
  );
}
