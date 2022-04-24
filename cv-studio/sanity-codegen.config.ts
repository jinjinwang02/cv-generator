const config = {
  schemaPath: './schemas/schema.ts',
  outputPath: '../cv-pdf/src/types/sanity.ts',
  generateTypeName: (sanityTypeName: string) =>
    `${sanityTypeName.charAt(0).toUpperCase()}${sanityTypeName.slice(1)}Type`,
};

export default config;
