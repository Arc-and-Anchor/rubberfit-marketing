import type { MetadataRoute } from "next";

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
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `https://get.rubberfit.app${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
