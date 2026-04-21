import { createHash } from "crypto";
import type { DeviceType } from "@/types/click";

const BOT_MARKERS = ["bot", "spider", "crawler"];

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

export function hashIp(ip: string) {
  const salt = process.env.IP_HASH_SALT || "replace-this-salt-in-production";
  return createHash("sha256").update(`${ip}:${salt}`).digest("hex");
}

export function detectDeviceType(userAgent: string | null): DeviceType {
  const ua = (userAgent || "").toLowerCase();
  if (BOT_MARKERS.some((marker) => ua.includes(marker))) {
    return "bot";
  }
  if (ua.includes("ipad") || ua.includes("tablet")) {
    return "tablet";
  }
  if (ua.includes("mobile") || ua.includes("android") || ua.includes("iphone")) {
    return "mobile";
  }
  return "desktop";
}

export function getUtmValue(url: URL, key: string) {
  return url.searchParams.get(key) || null;
}
