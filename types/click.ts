export type DeviceType = "desktop" | "mobile" | "tablet" | "bot";

export type ClickLog = {
  id: string;
  sellerSlug: string;
  requestId: string;
  clickedAt: string;
  referer: string | null;
  landingPage: string | null;
  ipHash: string;
  userAgent: string | null;
  deviceType: DeviceType;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  queryString: string;
  redirectTarget: string;
  createdAt: string;
};
