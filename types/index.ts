import { PortableTextBlock } from "sanity";

export type BlogType = {
  _id: string,
  title: string,
  content: PortableTextBlock[],
  metaDescription: string,
  slug: string,
  thumbnail: {
    alt: string,
    image: string
  },
};