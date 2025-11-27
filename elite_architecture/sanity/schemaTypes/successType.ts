import { defineField, defineType } from 'sanity';

export const successType = defineType({
  name: 'success',
  title: 'success',
  type: 'document',
  fields: [
    defineField({
      name: 'foundedDate',
      title: 'Founded Date',
      type: 'date',
    }),
    defineField({
      name: 'sqft',
      title: 'Square Feet Build',
      type: 'string',
    }),
    defineField({
      name: 'customers',
      title: 'Satisfied Customers',
      type: 'number',
    }),
  ],
});
