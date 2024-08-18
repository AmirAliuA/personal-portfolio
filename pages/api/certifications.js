import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const certificationsDirectory = join(process.cwd(), "data/certifications");

export function getCertificationSlugs() {
  return fs.readdirSync(certificationsDirectory);
}

export function getCertificationBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(certificationsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllCertifications(fields = []) {
  const slugs = getCertificationSlugs();
  const certifications = slugs
    .map((slug) => getCertificationBySlug(slug, fields))
    // sort certifications by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return certifications;
}