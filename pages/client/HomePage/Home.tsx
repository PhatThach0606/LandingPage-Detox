import { Header } from "@/components/Header/Header";
import { HeroBanner } from "@/components/HeroBaner/HeroBaner";
import { ServiceBar } from "@/components/ServiceBar/ServiceBar";
import { CategoryGrid } from "@/components/CategoryGrid/CatargoryGird";
import { ProductSection } from "@/components/ProductSection/ProductSection";

const products = [
  { id: 1, name: "Áo sơ mi", price: 20 },
  { id: 2, name: "Quần jean", price: 40 },
  { id: 3, name: "Váy", price: 35 },
  { id: 4, name: "Áo hoodie", price: 50 },
];

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ServiceBar />
      <CategoryGrid />
      <ProductSection title="Ưu đãi đặc biệt" products={products} />
      <ProductSection title="Gợi ý hôm nay" products={products} />
    </div>
  );
}
