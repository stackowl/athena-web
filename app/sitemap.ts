import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://athena.dev";
  const now = new Date();
  const routes = [
    "",
    "/download",
    "/ide",
    "/cli",
    "/web",
    "/mobile",
    "/pricing",
    "/docs",
    "/docs/getting-started",
    "/docs/worktrees",
    "/docs/agents",
    "/docs/skills",
    "/docs/cli",
    "/docs/remote",
    "/community",
    "/compliance",
    "/guide",
    "/faq",
    "/privacy",
    "/license",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
