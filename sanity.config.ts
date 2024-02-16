import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schema-types'

export default defineConfig({
  name: 'default',
  title: 'Portfolio and Blogs',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '8bb0n6i6',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  // This is folder name of app/studio
  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
