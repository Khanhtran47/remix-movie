/* eslint-disable @typescript-eslint/no-throw-literal */
import { LoaderFunction, json, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Row } from '@nextui-org/react';

import { authenticate } from '~/services/supabase';
import { getCredits } from '~/services/tmdb/tmdb.server';
import { postFetchDataHandler } from '~/services/tmdb/utils.server';
import { IMedia } from '~/types/media';

import MediaList from '~/src/components/media/MediaList';

type LoaderData = {
  crew: IMedia[];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  await authenticate(request);

  const { movieId } = params;
  const mid = Number(movieId);

  if (!mid) throw new Response('Not found', { status: 404 });
  const credits = await getCredits('movie', mid);

  if (!credits) throw new Response('Not found', { status: 404 });

  return json<LoaderData>({ crew: [...postFetchDataHandler(credits.crew, 'people')] });
};

export const meta: MetaFunction = ({ params }) => ({
  'og:url': `https://sora-anime.vercel.app/movies/${params.movieId}/crew`,
});

const CrewPage = () => {
  const { crew } = useLoaderData<LoaderData>();

  return (
    <Row
      fluid
      justify="center"
      align="center"
      css={{
        flexDirection: 'column',
        '@xsMax': {
          paddingLeft: '$sm',
          paddingRight: '$sm',
        },
        '@xs': {
          paddingLeft: '88px',
          paddingRight: '1rem',
        },
      }}
    >
      {/*
        TODO: Need react virtual to load this list
        This list has a lot of items, so i limit it to 24 items until we install react virtual
      */}
      {crew && crew.length > 0 && (
        <MediaList listType="grid" items={crew} listName="Crew" virtual itemsType="people" />
      )}
    </Row>
  );
};

export default CrewPage;
