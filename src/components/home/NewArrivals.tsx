import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';
import { getProducts } from '@/app/actions/product.action';

export default async function NewArrivals() {
  const allProducts = await getProducts();

  // Limit to 10 items
  const products = allProducts.slice(0, 10);

  return (
    <section className="w-full bg-white py-12 font-sans">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Section Header */}
        <SectionTitle
          highlightWord="New"
          mainText="Arrivals"
          className="mb-8 ml-4"
        />

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 ">
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
