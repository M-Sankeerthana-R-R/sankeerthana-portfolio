import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = "https://sankeerthana.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${BASE_URL}/work/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
