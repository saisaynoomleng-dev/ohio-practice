import { TiMessage } from 'react-icons/ti';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contacts',
  type: 'document',
  icon: TiMessage,
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
    },
    prepare({ firstName, lastName, email }) {
      const nameFormatted =
        firstName && lastName
          ? `${firstName} ${lastName}`
          : 'Name not provided';

      return {
        title: nameFormatted,
        subtitle: email,
        media: TiMessage,
      };
    },
  },
});
