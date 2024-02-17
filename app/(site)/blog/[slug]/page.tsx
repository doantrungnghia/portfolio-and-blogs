import Image from "next/image";
import { Metadata } from "next";
import { getBlog } from "../../../../sanity/sanity.query";
import type { BlogType } from "../../../../types";
import PortableParser from "app/(site)/components/portable-parser";
import { isEmpty } from 'lodash'
import NotFound from "app/not-found";
import { redirect } from 'next/navigation';
import Loading from "./loading";

type Props = {
  params: {
    slug: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog: BlogType = await getBlog(params.slug);

  return {
    title: blog.title,
    description: blog.metaDescription,
    openGraph: {
      images: blog.thumbnail?.image,
      title: blog.title,
      description: blog.metaDescription,
    },
  };
}

export default async function Blog({ params }: Props) {
  const blog: BlogType = await getBlog(params.slug);

  if(isEmpty(blog)) {
    redirect('/not-found')
  }

  return (
    <main className="mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight">
            {blog.title}
          </h1>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={blog.thumbnail?.image}
          alt={blog.thumbnail?.alt || blog.title}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableParser value={blog.content} />
        </div>
      </div>
    </main>
  );
}

// revalidate at most every hour
export const revalidate = 2;
