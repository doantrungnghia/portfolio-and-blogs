import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schema-types'
import {codeInput} from '@sanity/code-input'

export const sanityDefaultConfig = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '8bb0n6i6',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
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
