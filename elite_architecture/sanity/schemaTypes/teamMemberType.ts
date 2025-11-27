import { FaUser } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Members',
  icon: FaUser,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Member Name',
      type: 'string',
      validation: (rule) => rule.required().info(`Name is required`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'role',
      title: 'Member Role',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Architect', value: 'architect' },
          { title: 'Founder', value: 'founder' },
          { title: 'InteriorDesigner', value: 'interiorDesigner' },
          { title: 'Painter', value: 'painter' },
          { title: 'Practical Engineer', value: 'practicalEngineer' },
        ],
        layout: 'list',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Member Photo',
      type: 'blockImage',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      mainImage: 'mainImage',
    },
    prepare({ name, role, mainImage }) {
      const nameFormatted = name ? name : 'Unnamed Member';
      return {
        title: nameFormatted,
        media: mainImage || FaUser,
      };
    },
  },
});
