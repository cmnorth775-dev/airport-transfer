import SellerCard from "@/components/seller/SellerCard";
import { getGroupedSellers } from "@/lib/sellers";

export default function HomePage() {
  const groupedSellers = getGroupedSellers();

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <h1>机场推荐与订阅入口</h1>
          <p>这里展示机场名称、价格介绍、套餐介绍，并可直接前往订阅。</p>
        </div>
      </section>

      {groupedSellers.map((group) => (
        <section className="category-section" key={group.category}>
          <div className="container">
            <div className="category-title">
              <h2>{group.category}</h2>
              <span className="category-line" />
            </div>
            <div className="airport-grid">
              {group.sellers.map((seller) => (
                <SellerCard key={seller.slug} seller={seller} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
