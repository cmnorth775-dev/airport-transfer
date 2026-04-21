import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SellerDetail } from "@/components/seller/SellerDetail";
import { getActiveSellers, getSellerBySlug } from "@/lib/sellers";

export function generateStaticParams() {
  return getActiveSellers().map((seller) => ({ slug: seller.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seller = getSellerBySlug(slug);
  if (!seller) {
    return { title: "机场不存在" };
  }
  return {
    title: `${seller.name} - 机场订阅入口`,
    description: seller.priceIntro
  };
}

export default async function SellerPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const seller = getSellerBySlug(slug);

  if (!seller || seller.status !== "active") {
    notFound();
  }

  return <SellerDetail seller={seller} />;
}
