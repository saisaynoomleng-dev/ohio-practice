# Elite Architecture

**Sanity String with checkbox selectable list**
`defineField({
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
  }),`

