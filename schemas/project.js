export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "techStack",
      type: "array",
      title: "Tech Stack",
      of: [{ type: "reference", to: { type: "stack" } }],
    },
    {
      name: "content",
      type: "blockContent",
      title: "Content",
    },
    {
      name: "githublink",
      title: "Github Link",
      type: "url",
    },
    {
      name: "demolink",
      title: "Demo Link",
      type: "url",
    },
  ],
};
