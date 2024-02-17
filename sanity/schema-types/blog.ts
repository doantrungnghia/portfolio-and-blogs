import { defineField } from "sanity";

const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 4,
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
       of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        },
        {
          type: 'code'
        }
      ],
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      title: "Published?",
      name: "published",
      type: "boolean",
      initialValue: true,
      description:
        "Set to published when this blog should be visible to all users",
    },
  ],
};

export default blog;
