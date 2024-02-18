import { createClient, type ClientConfig } from "@sanity/client";

export const sanityClientConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: false,
};

const client = createClient(sanityClientConfig);

export default client;