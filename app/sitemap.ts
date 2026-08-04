import type { MetadataRoute } from "next";
import { DOCS_FLAT } from "@/lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://athena.dev";
  const now = new Date();

  const staticRoutes = ["", "/download", "/docs"];

  const docsRoutes = DOCS_FLAT.map((p) => p.path);

  const routes = [...staticRoutes, ...docsRoutes];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === "" || route === "/docs" ? 1 : route?.startsWith("/docs") ? 0.7 : 0.6,
  }));
}
