import type { Seller } from "@/types/seller";

type Props = {
  seller: Seller;
};

export default function SellerCard({ seller }: Props) {
  return (
    <article className="airport-card">
      <h3>{seller.name}</h3>
      <p className="price-intro">{seller.priceIntro}</p>
      <ul className="package-list">
        {seller.packageIntro.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className="button button-primary" href={`/go/${seller.slug}`}>
        前往订阅
      </a>
    </article>
  );
}
