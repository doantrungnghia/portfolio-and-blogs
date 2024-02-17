
import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog" && published == true]{
      _id,
      title,
      thumbnail { alt, "image": asset->url },
      content,
      "slug": slug.current,
      metaDescription,
      published,
    }`
  );
}

export async function getBlog(slug: string) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      thumbnail { alt, "image": asset->url },
      content,
      "slug": slug.current,
      metaDescription,
      published
    }`,
    { slug }
  );
}