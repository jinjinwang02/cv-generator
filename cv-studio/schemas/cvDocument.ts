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
  ],
};
