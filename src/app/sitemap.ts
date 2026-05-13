import type { MetadataRoute } from "next";

import { SITE_LAST_MODIFIED, SITE_URL } from "@/app/site";

const routes = [
  "",
  "/cutting-engine",
  "/inventory",
  "/jobs",
  "/how-it-works",
  "/security",
  "/pricing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
