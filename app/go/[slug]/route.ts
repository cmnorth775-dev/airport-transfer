import { NextResponse } from "next/server";
import { getRedirectTarget } from "@/lib/redirect";
import { buildClickLog, recordClick } from "@/lib/tracking";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const lookup = getRedirectTarget(slug);

  if (lookup.status === "not-found") {
    console.warn(`Redirect failed: seller not found (${slug})`);
    return NextResponse.json(
      { code: 404, message: "Seller not found" },
      { status: 404 }
    );
  }

  if (lookup.status === "gone") {
    console.warn(`Redirect failed: seller unavailable (${slug})`);
    return NextResponse.json(
      { code: 410, message: "Seller is unavailable" },
      { status: 410 }
    );
  }

  try {
    const log = buildClickLog({
      request,
      sellerSlug: slug,
      redirectTarget: lookup.target
    });
    await recordClick(log);
  } catch (error) {
    console.error("Click log write failed", error);
  }

  return NextResponse.redirect(lookup.target, 302);
}
