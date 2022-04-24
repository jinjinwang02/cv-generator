import PicoSanity from 'picosanity';

const projectDetails = {
  projectId: 'q00rywum',
  dataset: 'production',
};

const sanityClient = new PicoSanity({
  ...projectDetails,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-10-21',
});

export default sanityClient;
