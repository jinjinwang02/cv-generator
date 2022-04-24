export default {
  title: 'Main content',
  name: 'mainContent',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Direction',
      name: 'direction',
      type: 'string',
      options: {
        list: [
          { title: 'Column', value: 'column' },
          { title: 'Row', value: 'row' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'rows' }],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};
