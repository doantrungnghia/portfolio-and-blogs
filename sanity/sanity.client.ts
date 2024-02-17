import { createClient, type ClientConfig } from "@sanity/client";

export const sanityClientConfig: ClientConfig = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',
  useCdn: false,
};

const client = createClient(sanityClientConfig);

export default client;