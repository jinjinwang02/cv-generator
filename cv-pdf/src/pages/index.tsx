import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import sanityClient from '../lib/sanity';
import { CvType } from '../types/sanity';

type Slug = CvType['slug'];

type Props = {
  slugs: string[];
};

const Home: NextPage<Props> = ({ slugs }: Props) => {
  const { isFallback } = useRouter();

  if (isFallback) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title></title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='homepage'>
        <h1>CVs:</h1>
        <ul>
          {slugs.map((slug) => (
            <li key={slug}>
              <Link href={`cv/${slug}/`}>
                <a>{slug}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch<{ slug: Slug }[]>(
    `*[_type == 'cv'] { slug }`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }
  const slugs = data.map(({ slug }) => slug.current);

  return {
    props: { slugs },
  };
};

export default Home;
