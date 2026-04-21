import type { Seller } from "@/types/seller";
import SellerCard from "@/components/seller/SellerCard";

export function SellerDetail({ seller }: { seller: Seller }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{seller.name}</h1>
          <p>{seller.priceIntro}</p>
        </div>
      </section>
      <section className="container content-stack">
        <SellerCard seller={seller} />
      </section>
    </>
  );
}
