- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://vercel.com/postgres)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **CMS**: [Sanity](https://www.sanity.io/)

## Running Locally

### Create an Sanity application

Go to [Sanity](https://www.sanity.io) to create an application and pass key to environments `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`

### Environment variables

Set up environment variables following `.env.example`

### Running

This application requires Node.js v18.17+.

```bash
bun install
bun run setup # Remove all of my personal information
bun dev
```

Create a `.env.local` file similar to `.env.example`

## Sanity

Navigate to `/studio` to log in to your Sanity account, where you can access and edit content once you've signed up.

Updates made to your site would be triggered only on build time → If you update a field in your studio using the hosted link, you would have to manually trigger a deployment on Vercel to see the changes.

We have 2 solution: 
- Following https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs/ to trigger deploy Vercel when update document in studio

- [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration), which is a better option if you're building a large scale application.

I choose ISR for this project about every hour 

### What's ISR ?

When a request is made to a page that was pre-rendered at build time, it will initially show the cached page.

- Any requests to the page after the initial request and before 10 seconds are also cached and instantaneous.

- After the 10-second window, the next request will still show the cached (stale) page

- Next.js triggers a regeneration of the page in the background.

- Once the page generates successfully, Next.js will invalidate the cache and show the updated page. If the background regeneration fails, the old page would still be unaltered.

## NextAuth

All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.

https://next-auth.js.org/getting-started/example

