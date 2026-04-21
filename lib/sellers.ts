import type { AirportCategory, Seller } from "@/types/seller";

export const categoryOrder: AirportCategory[] = [
  "性价比机场",
  "高端机场",
  "大流量机场",
  "轻量尝鲜机场"
];

export const sellers: Seller[] = [
  {
    slug: "qytaff",
    name: "青云梯",
    category: "性价比机场",
    priceIntro: "月付门槛较低，适合日常使用，也适合新用户先尝试。",
    packageIntro: [
      "支持月付、季付、年付",
      "适合日常浏览和长期使用",
      "适合新手入门"
    ],
    inviteUrl: "https://ivt02.qytaff.cc/register?aff=o9APloE7",
    status: "active",
    sortOrder: 1
  },
  {
    slug: "premium-airport",
    name: "高端机场示例",
    category: "性价比机场",
    priceIntro: "价格偏高，适合更看重稳定性和线路质量的用户。",
    packageIntro: [
      "支持标准套餐和高级套餐",
      "适合多设备长期使用",
      "适合对速度要求较高的用户"
    ],
    inviteUrl: "https://example.com/premium/register?aff=YOUR_CODE",
    status: "active",
    sortOrder: 2
  },
  {
    slug: "traffic-airport",
    name: "大流量机场示例",
    category: "大流量机场",
    priceIntro: "流量额度更充足，适合使用频率较高的用户。",
    packageIntro: [
      "提供大流量月付套餐",
      "适合视频和下载需求",
      "适合长时间在线使用"
    ],
    inviteUrl: "https://example.com/traffic/register?aff=YOUR_CODE",
    status: "active",
    sortOrder: 3
  },
  {
    slug: "trial-airport",
    name: "轻量尝鲜示例",
    category: "轻量尝鲜机场",
    priceIntro: "价格较轻，适合短期体验或备用入口。",
    packageIntro: [
      "适合低频使用",
      "适合作为备用订阅",
      "适合先体验再决定"
    ],
    inviteUrl: "https://example.com/trial/register?aff=YOUR_CODE",
    status: "active",
    sortOrder: 4
  }
];

export function getActiveSellers(): Seller[] {
  return sellers
    .filter((seller) => seller.status === "active" && !!seller.inviteUrl)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSellerBySlug(slug: string): Seller | undefined {
  return sellers.find((seller) => seller.slug === slug);
}

export function getGroupedSellers() {
  const activeSellers = getActiveSellers();

  return categoryOrder
    .map((category) => ({
      category,
      sellers: activeSellers.filter((seller) => seller.category === category)
    }))
    .filter((group) => group.sellers.length > 0);
}
