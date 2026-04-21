export type AirportCategory =
  | "性价比机场"
  | "高端机场"
  | "大流量机场"
  | "轻量尝鲜机场";

export type Seller = {
  slug: string;
  name: string;
  category: AirportCategory;
  priceIntro: string;
  packageIntro: string[];
  inviteUrl: string;
  status: "active" | "inactive";
  sortOrder: number;
};
