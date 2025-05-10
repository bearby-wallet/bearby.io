import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/markdown/docs');

export async function getPostSlugs(locale: string): Promise<string[]> {
  const localePath = path.join(postsDirectory, locale);
  const files = await fs.readdir(localePath);
  return files.filter((file) => file.endsWith('.mdx'));
}

function extractFields(fileContents: string, slug: string, fields: string[]) {
  const { data, content } = matter(fileContents);
  const item: Record<string, string> = {};

  for (const field of fields) {
    if (field === 'slug') item[field] = slug;
    if (field === 'content') item[field] = content;
    if (typeof data[field] !== 'undefined') item[field] = data[field];
  }

  return item;
}

export async function getPostBySlug(locale: string, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  let fullPath = path.join(postsDirectory, locale, `${realSlug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    return extractFields(fileContents, realSlug, fields);
  } catch (err) {
    if (locale !== 'en') {
      const fallbackPath = path.join(postsDirectory, 'en', `${realSlug}.mdx`);
      try {
        const fallbackContents = await fs.readFile(fallbackPath, 'utf8');
        return extractFields(fallbackContents, realSlug, fields);
      } catch (fallbackError) {
        console.error(`Fallback also failed for slug "${slug}":`, fallbackError);
        throw err; // rethrow original
      }
    } else {
      throw err;
    }
  }
}

export async function getAllPosts(fields: string[], locale: string) {
  const slugs = await getPostSlugs(locale);
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(locale, slug, fields))
  );

  return posts.sort((a, b) => {
    if (a.date && b.date) {
      return a.date > b.date ? -1 : 1;
    }
    return 0;
  });
}
