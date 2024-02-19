import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image';
import ViewCounter from '../../app/(site)/blog/view-counter';
import { PreloadResources } from '../../app/preload';
import {
  getYouTubeSubs,
  getViewsCount,
} from '../../app/db/queries';
import React from 'react';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
              priority
            />
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            {/* <Suspense fallback={<p className="h-6" />}>
              <Subs />
            </Suspense> */}
          </div>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Subs() {
  noStore();

  const subscribers = await getYouTubeSubs();

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {subscribers} subscribers
    </p>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          {/* <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense> */}
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Hi, I'm Doan Trung Nghia 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am a passionate software engineer with expertise in building web and mobile applications using modern technologies such as NodeJS, ReactJS, React Native, and NextJS. With a strong foundation in software development principles and a keen interest in emerging technologies, I strive to create robust, scalable, and user-centric solutions that drive value for businesses and users alike.
      </p>

      <p className="prose prose-neutral dark:prose-invert mt-6">
        Photography is my hobby; it's my creative outlet and a way to capture the beauty of the world around us
      </p>

      <div className="mt-4">
        <a href="https://github.com/doantrungnghia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
            <path fill-rule="evenodd" d="M12 .75a11.25 11.25 0 00-3.557 21.98c.563.104.77-.245.77-.546l-.006-1.929c-3.143.684-3.807-1.51-3.807-1.51-.513-1.275-1.255-1.615-1.255-1.615-.978-.67.074-.656.074-.656 1.08.075 1.65 1.106 1.65 1.106.96 1.647 2.52 1.17 3.136.896.098-.704.375-1.17.68-1.44-2.386-.272-4.893-1.19-4.893-5.304 0-1.17.42-2.126 1.106-2.877-.104-.274-.48-1.363.104-2.838 0 0 .944-.304 3.1 1.1.896-.249 1.854-.374 2.804-.378.947.004 1.903.129 2.804.378 2.156-1.404 3.1-1.1 3.1-1.1.584 1.475.208 2.564.104 2.838.684.75 1.106 1.707 1.106 2.877 0 4.124-2.512 5.03-4.905 5.296.386.33.73.983.73 1.98l-.006 2.933c0 .302.203.654.777.543A11.25 11.25 0 0012 .75z" clip-rule="evenodd"/>
          </svg>
          View My GitHub Profile
        </a>

      </div>


      {/* Put my images about me here */}
      {/* <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> */}

      {/* Add youtube later */}
      {/* <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img={avatar}
          name="@"
          link="https://www.youtube.com/@"
        />
        <ChannelLink
          img={vercel}
          name="@vercel"
          link="https://www.youtube.com/@vercelhq"
        />
      </div> */}

      {/* Some special posts */}
      {/* <div className="my-8 flex flex-col space-y-4 w-full">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience-examples"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel-at-vercel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div> */}
    </section>
  );
}
