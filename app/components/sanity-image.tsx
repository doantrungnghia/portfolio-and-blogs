'use client'

import { useNextSanityImage } from "next-sanity-image";
import { sanityClientConfig } from "sanity/sanity.client";
import Image from "next/image";

const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(sanityClientConfig, asset);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};

export default SanityImage;
