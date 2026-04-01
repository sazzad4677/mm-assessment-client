import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';
import { getProducts } from '@/app/actions/product.action';

export default async function NewArrivals() {
  const allProducts = await getProducts();

  // Limit to 10 items
  const products = allProducts.slice(0, 10);

  return (
    <section className="w-full bg-white py-8 md:py-12 font-sans px-0 md:px-4">
      <div className="w-full mx-auto px-4 md:px-8 xl:px-20">
        {/* Section Header */}
        <SectionTitle
          highlightWord="New"
          mainText="Arrivals"
          className="mb-6 md:mb-8 ml-4"
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6 px-4 md:px-0">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              brandName={
                product.category.charAt(0).toUpperCase() +
                product.category.slice(1)
              }
              productName={product.title}
              currentPrice={product.price}
              originalPrice={Number((product.price * 1.2).toFixed(2))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
