import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";
import { allProjects, getProjectHref } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...allProjects.map((project) => ({
      url: absoluteUrl(getProjectHref(project)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}