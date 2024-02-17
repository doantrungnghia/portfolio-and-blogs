import { createClient, type ClientConfig } from "@sanity/client";
import { sanityDefaultConfig } from '../sanity.config'

export const sanityClientConfig: ClientConfig = {
  ...sanityDefaultConfig,
  useCdn: false,
};

const client = createClient(sanityClientConfig);

export default client;