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
  ],
};
