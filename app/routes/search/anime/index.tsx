import { DataFunctionArgs, json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, useNavigate, Link } from '@remix-run/react';
import { Container } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import { getAnimeTrending } from '~/services/consumet/anilist/anilist.server';
import { authenticate } from '~/services/supabase';
import { IMedia } from '~/types/media';

import MediaList from '~/src/components/media/MediaList';
import SearchForm from '~/src/components/elements/SearchForm';

type LoaderData = {
  items: Awaited<ReturnType<typeof getAnimeTrending>>;
};

export const loader: LoaderFunction = async ({ request }: DataFunctionArgs) => {
  await authenticate(request);

  const url = new URL(request.url);
  let page = Number(url.searchParams.get('page'));
  if (!page && (page < 1 || page > 1000)) page = 1;

  return json<LoaderData>({
    items: await getAnimeTrending(page, 20),
  });
};

export const handle = {
  breadcrumb: () => (
    <Link to="/search/anime" aria-label="Search Anime">
      Search Anime
    </Link>
  ),
};

const SearchRoute = () => {
  const { items } = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = (value: string) => {
    navigate(`/search/anime/${value}`);
  };
  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        textOnButton={t('search.action')}
        textHelper={t('search.helper.anime')}
        textPlaceHolder={t('search.placeHolder.anime')}
      />
      <Container
        fluid
        display="flex"
        justify="center"
        direction="column"
        alignItems="center"
        css={{
          '@xsMax': {
            paddingLeft: '$sm',
            paddingRight: '$sm',
          },
        }}
      >
        {items && items.results && items.results.length > 0 && (
          <MediaList
            hasNextPage={items.hasNextPage || false}
            items={items.results as IMedia[]}
            itemsType="anime"
            listName="Trending Anime"
            listType="grid"
            loadingType="scroll"
            routeName="/anime/trending"
            virtual
          />
        )}
      </Container>
    </>
  );
};

export default SearchRoute;
