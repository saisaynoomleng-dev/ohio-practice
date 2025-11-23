import { Capitalize, formatCurrency } from '@/lib/utils';
import { FaVanShuttle } from 'react-icons/fa6';
import { defineField, defineType } from 'sanity';

export const vanType = defineType({
  name: 'van',
  title: 'Vans',
  icon: FaVanShuttle,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Van Name',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .info(`Van Name should have at least 10 characters`),
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().error('Required to generate a page on the website'),
    }),
    defineField({
      name: 'type',
      title: 'Van Type',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Rugged', value: 'rugged' },
          { title: 'Luxury', value: 'luxury' },
        ],
      },
      validation: (rule) =>
        rule.required().info(`Van Type is required for filtering vans`),
    }),
    defineField({
      name: 'price',
      title: 'Daily Rent',
      type: 'number',
      initialValue: 50,
      validation: (rule) => rule.required().error('Daily Rent is required'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) =>
            rule.required().error('Alt Text is required for accessiblity'),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'review' } }],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      image: 'mainImage',
    },
    prepare({ name, price, image }) {
      const nameFormatted = name ? Capitalize(name) : 'Untitle Van';
      const priceFormatted = price ? formatCurrency(price) : 'Uknown Price';

      return {
        title: nameFormatted,
        subtitle: `${priceFormatted}/day`,
        media: image || FaVanShuttle,
      };
    },
  },
});
