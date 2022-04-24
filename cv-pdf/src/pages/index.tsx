import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import sanityClient from '../lib/sanity';
import { CvType } from '../types/sanity';

type Props = {
  slugs: string[];
};

const Home: NextPage<Props> = ({ slugs }: Props) => {
  const { isFallback } = useRouter();

  if (isFallback) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>CV generator 🦾</title>
      </Head>
      <div className='homepage'>
        <h1>CV generator 🦾</h1>
        <h2>All available CVs 📑</h2>
        <ul>
          {slugs.map((slug) => (
            <li key={slug}>
              <Link href={`/cv/${slug}`}>
                <a>{slug}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h2>CV studio link 👩🏻‍💻</h2>
        <a href='https://google.com'>[placeholder]</a>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch<{ slug: CvType['slug'] }[]>(
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
