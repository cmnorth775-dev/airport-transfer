import { mkdir, appendFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import type { ClickLog } from "@/types/click";
import { detectDeviceType, getClientIp, getUtmValue, hashIp } from "@/lib/request";

export function buildClickLog(params: {
  request: Request;
  sellerSlug: string;
  redirectTarget: string;
}): ClickLog {
  const { request, sellerSlug, redirectTarget } = params;
  const url = new URL(request.url);
  const now = new Date().toISOString();
  const userAgent = request.headers.get("user-agent");
  const referer = request.headers.get("referer");
  const landingPage = url.searchParams.get("from") || referer;

  return {
    id: randomUUID(),
    sellerSlug,
    requestId: randomUUID(),
    clickedAt: now,
    referer,
    landingPage,
    ipHash: hashIp(getClientIp(request)),
    userAgent,
    deviceType: detectDeviceType(userAgent),
    utmSource: getUtmValue(url, "utm_source"),
    utmMedium: getUtmValue(url, "utm_medium"),
    utmCampaign: getUtmValue(url, "utm_campaign"),
    utmContent: getUtmValue(url, "utm_content"),
    queryString: url.search,
    redirectTarget,
    createdAt: now
  };
}

export async function recordClick(log: ClickLog) {
  const logDir = join(process.cwd(), "logs");
  const logPath = join(logDir, "click_logs.ndjson");
  await mkdir(logDir, { recursive: true });
  await appendFile(logPath, `${JSON.stringify(log)}\n`, "utf8");
}
