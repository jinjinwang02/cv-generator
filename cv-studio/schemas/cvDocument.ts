export default {
  title: 'CV',
  name: 'cv',
  type: 'document',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contact details',
      name: 'contactDetails',
      type: 'array',
      of: [{ type: 'string' }],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Main content',
      name: 'mainContent',
      type: 'array',
      of: [{ type: 'mainContent' }],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Spacing',
      name: 'spacing',
      type: 'object',
      fields: [
        {
          title: 'Document horizontal padding',
          name: 'documentHorizontalPadding',
          type: 'number',
          description: 'Default: 30(px)',
          initialValue: 30,
        },
        {
          title: 'Document vertical padding',
          name: 'documentVerticalPadding',
          type: 'number',
          description: 'Default: 30(px)',
          initialValue: 30,
        },
        {
          title: 'Main section gap',
          name: 'mainSectionGap',
          type: 'number',
          description:
            'Gap between each section, e.g. between Profile and Employment. Default: 12(px)',
          initialValue: 12,
        },
        {
          title: 'Section horizontal gap',
          name: 'sectionHorizontalGap',
          type: 'number',
          description:
            'Gap within each section with horizontal layout, e.g. between skills. Default: 12(px)',
          initialValue: 12,
        },
        {
          title: 'Section vertical gap',
          name: 'sectionVerticalGap',
          type: 'number',
          description:
            'Gap within each section with vertical layout, e.g. between employment history . Default: 8(px)',
          initialValue: 8,
        },
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};
