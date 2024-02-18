import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schema-types'
import {codeInput} from '@sanity/code-input'

export const sanityDefaultConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
}

export default defineConfig({
  ...sanityDefaultConfig,
  name: 'default',
  title: 'Portfolio and Blogs',

  // This is folder name of app/studio
  basePath: "/studio",

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
