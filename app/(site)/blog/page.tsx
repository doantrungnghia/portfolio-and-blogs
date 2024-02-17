import Link from 'next/link';
import { getBlogs } from 'sanity/sanity.query';
import { BlogType } from 'types';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  let allBlogs: BlogType[] = await getBlogs();

  return (
    <section>
      {allBlogs
        .map((post, index) => (
          <Link
            key={index}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {post.metaDescription}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}

// revalidate at most every hour
export const revalidate = 3600