import { getSellerBySlug } from "@/lib/sellers";

export type RedirectLookup =
  | { status: "ok"; target: string }
  | { status: "not-found" }
  | { status: "gone" };

export function getRedirectTarget(slug: string): RedirectLookup {
  const seller = getSellerBySlug(slug);
  if (!seller) {
    return { status: "not-found" };
  }
  if (seller.status !== "active" || !seller.inviteUrl) {
    return { status: "gone" };
  }
  return { status: "ok", target: seller.inviteUrl };
}
