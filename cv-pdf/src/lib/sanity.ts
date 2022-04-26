import PicoSanity from 'picosanity';

const projectDetails = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET || '',
};

const sanityClient = new PicoSanity({
  ...projectDetails,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-10-21',
});

export default sanityClient;
