import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

const CVDocument = dynamic(() => import('../components/CVDocument'), {
  ssr: false,
});

const Home: NextPage = () => (
  <div>
    <Head>
      <title>CV generator</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <CVDocument />
  </div>
);

export default Home;
