import { getBlogs } from "../sanity/sanity.query";

export default async function sitemap() {
  const blogs = await getBlogs()

  const customBlogs = blogs.map((post) => ({
    url: `https://doantrungnghia.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/uses', '/work'].map((route) => ({
    url: `https://doantrungnghia.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...customBlogs];
}
