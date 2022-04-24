import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

const PdfDocument = dynamic(() => import('../components/PdfDocument'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CV generator</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <PdfDocument />
    </div>
  );
};

export default Home;
