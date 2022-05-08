import React from 'react';
import { StoriesAPICollectionProps } from 'react-stories-api';

import { searchURL, useQuery } from '../../../utils/url';
import CollectionContainer from '../../containers/CollectionContainer';
import AppLayout from '../../layout/AppLayout';

const CollectionPage = () => {
  const query = useQuery();
  const updateHistory: StoriesAPICollectionProps['onChange'] = ({ page, q }) => {
    const newURL = searchURL(undefined, q, page);
    if (window) {
      window.history.replaceState({ path: newURL },'', newURL);
    }
  };
  return (
    <AppLayout>
      <CollectionContainer
        onChange={updateHistory}
        page={query.get('page') as unknown as number | undefined}
        q={query.get('q') || ''}
      />
    </AppLayout>
  );
};

export default CollectionPage;
