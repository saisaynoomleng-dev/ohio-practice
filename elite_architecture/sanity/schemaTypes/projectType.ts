import { GiTriplePlier } from 'react-icons/gi';
import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  icon: GiTriplePlier,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .info(`Project name must have at least 10 characters`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().error('Required to generate a page on the website'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Image',
      type: 'blockImage',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      mainImage: 'mainImage',
    },
    prepare({ name, mainImage }) {
      const nameFormatted = name ? name : 'Untitled Project';
      return {
        title: nameFormatted,
        media: mainImage || GiTriplePlier,
      };
    },
  },
});
