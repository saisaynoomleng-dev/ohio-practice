import { FaRocketchat } from 'react-icons/fa6';
import { defineField, defineType } from 'sanity';

export const reviewType = defineType({
  name: 'review',
  title: 'Reviews',
  type: 'document',
  icon: FaRocketchat,
  fields: [
    defineField({
      name: 'username',
      title: 'User Name',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
});
