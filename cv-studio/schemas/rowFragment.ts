export default {
  title: 'Row fragment',
  name: 'rowFragment',
  type: 'object',
  fields: [
    {
      title: 'Fragments',
      name: 'fragments',
      type: 'array',
      of: [
        {
          title: 'Fragment',
          name: 'fragment',
          type: 'object',
          fields: [
            {
              title: 'Content',
              name: 'content',
              type: 'text',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Style',
              name: 'style',
              type: 'string',
              options: {
                list: [
                  { title: 'Bold', value: 'bold' },
                  { title: 'Default', value: 'default' },
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'content',
            },
          },
        },
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required().max(2),
    },
  ],
  preview: {
    select: {
      fragments: 'fragments',
    },
    prepare({ fragments }) {
      const contentOne = fragments?.[0]?.content;
      const contentTwo = fragments?.[1]?.content;
      const title = [contentOne, contentTwo]
        .filter(Boolean)
        .map((content) => `[${content}]`)
        .join(', ');

      return { title };
    },
  },
};
