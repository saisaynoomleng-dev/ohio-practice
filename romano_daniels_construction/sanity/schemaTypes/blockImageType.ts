import { defineField, defineType } from 'sanity';

export const blockImageType = defineType({
  name: 'blockImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  validation: (rule) => rule.required(),
});
