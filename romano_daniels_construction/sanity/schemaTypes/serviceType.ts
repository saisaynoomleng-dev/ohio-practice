import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  icon: MdOutlineMiscellaneousServices,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'desc',
      title: 'Service Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
});
