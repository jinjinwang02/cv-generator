export default {
  title: 'Rows',
  name: 'rows',
  type: 'object',
  fields: [
    {
      title: 'Row',
      name: 'row',
      type: 'array',
      of: [{ type: 'rowFragment' }],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      row: 'row',
    },
    prepare({ row }) {
      const title = row?.[0]?.fragments?.[0]?.content;
      return { title };
    },
  },
};
