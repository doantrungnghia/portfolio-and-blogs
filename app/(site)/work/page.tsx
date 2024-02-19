import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

const Block = ({ title, subtitle, children } : { title: string, subtitle: string, children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">{title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {subtitle}
      </p>
      <div className='mt-6'>
        {children}
      </div>
    </div>
  )
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-4xl mb-8 tracking-tighter">Tech stack</h1>

      <div className='flex flex-col gap-4'>
        <p>
          <b>Frontend Languages:</b> ReactJS, React Native, NextJS (TypeScript)
        </p>
        <p>
          <b>Backend Languages:</b> NodeJS, NestJS (TypeScript)
        </p>
        <p>
          <b>Unit Test:</b> Jest
        </p>
        <p>
          <b>Integration Test:</b> Cypress
        </p>
        <p>
          <b>Database:</b> PostgreSQL
        </p>
        <p>
          <b>Tools:</b> Fastlane, Docker
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h1 className="font-medium text-4xl mb-8 tracking-tighter">Projects</h1>

        <Block title="Mellori" subtitle='Software Engineer, 2019 - 2022'>
          <p>
            Our education project aims to cultivate an optimal learning environment that fosters growth and success for both educators and students alike.
          </p>
          <p>
            <b>June 2019 - December 2020:</b> Research and build demo, almost many features was removed when start in Jan 2021.
          </p>
          <p>
            <b>Jan 2021 to May 2022:</b> Web version.
          </p>
           <p>
            <b>June 2022 to December 2022:</b> Mobile version.
          </p>
        </Block>

        <Block title="VerifSuite" subtitle='Software Engineer, 2022 - present'>
          <p>
            Mobile project about apartment management. Allow admin to manage house owner, tenant and theirs guest, manage time to open facilities. Allow owner, tenant to book facilities and register their guest to access apartment.
          </p>

          <p><b>App store:</b> <a href='https://apps.apple.com/sg/app/verifsuite/id1610670528' target='_blank' rel='noopener noreferrer'>Link</a></p>
          <p><b>Google Play:</b> <a href='https://play.google.com/store/apps/details?id=com.ademco&hl=en&gl=US' target='_blank' rel='noopener noreferrer'>Link</a></p>
        </Block>

        <Block title="Squarely" subtitle='Software Engineer, 2023'>
          <p>
            Squarely Finance is your comprehensive solution for effortless financial management. With our intuitive platform, users can seamlessly register accounts with supported banks via Stripe integration, enabling hassle-free access to a range of financial services like Bank Account Registration, Multi-Currency Wallets, Money Transfer and Conversion.
          </p>
        </Block>

        <Block title="Inform" subtitle='Software Engineer, 2022'>
          <p>
            A dynamic platform that enables users to effortlessly create and publish surveys. Surveys support a variety of question types, including multiple and picture choice, multiple questions, long and short text, true/false questions.
          </p>
        </Block>

        <Block title="Eyeset" subtitle='Software Engineer, 2023'>
          <p>
            Eyeset is a React Native application designed to enhance your navigation experience. With Eyeset, users can effortlessly explore maps, select destinations, and receive guided directions, similar to popular navigation apps like Google Maps. What sets Eyeset apart is its integration of real-time data sourced from the Singapore government.
          </p>
        </Block>

        <Block title="JML" subtitle='Freelancer Software Engineer, 2024'>
          <p>
            Our eCommerce project, powered by MedusaJS, offers essential functionalities for eCommerce carts, customer management, checkout processes, order management,...
          </p>
        </Block>

        <Block title="Fastbo" subtitle='Freelancer Software Engineer, 2024'>
          <p>
            Our project enables users to submit data through a user-friendly interface, which is then processed and displayed within a predefined HTML template. Upon submission, users receive a response in the form of an image containing the template UI filled with the submitted data.
          </p>
        </Block>
      </div>
    </section>
  );
}
