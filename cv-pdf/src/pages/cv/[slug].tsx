import Head from 'next/head';
import dynamic from 'next/dynamic';
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';

import { CvType } from '../../types/sanity';
import sanityClient from '../../lib/sanity';

type Props = {
  page: CvType;
};

const CVDocument = dynamic(() => import('../../components/CVDocument'), {
  ssr: false,
});

const CVSlugPage: NextPage<Props> = ({ page }: Props) => {
  const { isFallback } = useRouter();

  if (isFallback) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>{page.slug.current}</title>
      </Head>
      <CVDocument page={page} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await sanityClient.fetch<{ slug: CvType['slug'] }[]>(
    `*[_type == 'cv'] { slug }`
  );
  const paths = slugs.map(({ slug }) => ({
    params: { slug: slug.current },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const notFoundProps: GetStaticPropsResult<Props> = {
    notFound: true,
  };

  if (!params) {
    return notFoundProps;
  }

  const page = await sanityClient.fetch<CvType>(
    `*[_type == "cv" && slug.current == '${params.slug}'][0]`
  );
  if (!page) {
    return notFoundProps;
  }

  return {
    props: { page },
  };
};

export default CVSlugPage;
