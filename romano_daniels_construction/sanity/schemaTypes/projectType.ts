import { formatDate } from '@/lib/utils';
import { FaProjectDiagram } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  icon: FaProjectDiagram,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Image',
      type: 'blockImage',
    }),
    defineField({
      name: 'startDate',
      title: 'Project Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'finishDate',
      title: 'Project finished date',
      type: 'date',
    }),
    defineField({
      name: 'desc',
      title: 'Project Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      mainImage: 'mainImage',
      startDate: 'startDate',
    },
    prepare({ name, mainImage, startDate }) {
      const nameFormatted = name ? name : 'Unname Project';
      const startDateFormatted = startDate
        ? formatDate(startDate)
        : 'Start Date Not Provided';

      return {
        title: nameFormatted,
        subtitle: `Start Date: ${startDateFormatted}`,
        media: mainImage || FaProjectDiagram,
      };
    },
  },
});
