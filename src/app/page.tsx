import HeroBanner from '@/components/ui/HeroBanner';
import BestDealsSection from '@/components/home/BestDealsSection';
import CategoryCarousel from '@/components/home/CategoryCarousel';
import NewArrivals from '@/components/home/NewArrivals';

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

  // Fetch the first product of each category to get a product image
  const categoriesWithImages = await Promise.all(
    categories.map(async (cat, idx) => {
      const catProducts =
        cat.name === initialCategoryName
          ? initialProducts
          : await getProductsByCategory(cat.name);

      return {
        ...cat,
        image:
          catProducts.length > 0
            ? catProducts[0].image
            : idx % 2 === 0
              ? '/demo-images/category-demo.png'
              : '/demo-images/category-demo-2.png',
      };
    }),
  );

  return (
    <>
      <HeroBanner />
      <CategoryCarousel categories={categoriesWithImages} />
      <NewArrivals />
      <div className="flex flex-col gap-6 p-4 md:p-10 bg-white">
        <BestDealsSection
          initialProducts={initialProducts}
          categories={categories}
        />
      </div>
    </>
  );
}
