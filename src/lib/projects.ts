import { type CollectionEntry, getCollection } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;

function compareByDateDesc(a: ProjectEntry, b: ProjectEntry) {
  const aTime = a.data.date?.getTime() ?? 0;
  const bTime = b.data.date?.getTime() ?? 0;
  return bTime - aTime;
}

export async function getPublishedProjects() {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort(compareByDateDesc);
}

export async function getLatestProjects(limit = 3) {
  const projects = await getPublishedProjects();
  return projects.slice(0, limit);
}
