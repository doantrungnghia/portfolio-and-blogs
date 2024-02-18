- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://vercel.com/postgres)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **CMS**: [Sanity](https://www.sanity.io/)

## Running Locally

This application requires Node.js v18.17+.

```bash
bun install
bun run setup # Remove all of my personal information
bun dev
```

Create a `.env.local` file similar to `.env.example`

## Sanity

Navigate to /studio to log in to your Sanity account, where you can access and edit content once you've signed up.

## NextAuth

All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.

https://next-auth.js.org/getting-started/example

