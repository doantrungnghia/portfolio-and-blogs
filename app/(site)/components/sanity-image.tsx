import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

const SanityImage = ({value, isInline}) => {
  const {width, height} = getImageDimensions(value)

  return (
    <img
      src={urlBuilder({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
      })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

export default SanityImage