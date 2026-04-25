import { Header } from "@/components/Header/Header";
import { HeroBanner } from "@/components/HeroBaner/HeroBaner";
import { ServiceBar } from "@/components/ServiceBar/ServiceBar";
import { CategoryGrid } from "@/components/CategoryGrid/CatargoryGird";
import { ProductSection } from "@/components/ProductSection/ProductSection";

const products = [
  {
    id: 1,
    name: "Nước detox xanh",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1524593166156-312f362cada0?q=80&w=800",
  },
  {
    id: 2,
    name: "Nước cam ép lạnh",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800",
  },
  {
    id: 3,
    name: "Sinh tố detox trái cây",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800",
  },
  {
    id: 4,
    name: "Nước thanh lọc thảo mộc",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800",
  },
];
export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ServiceBar />
      <CategoryGrid />

      <ProductSection title="Sản phẩm nổi bật" products={products} />
    </div>
  );
}
