import { createBrowserRouter } from 'react-router-dom';

import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import { RoutePaths } from './constants';
import CollectionView from './views/CollectionView/CollectionView';
import HomeView from './views/HomeView/HomeView';
import StoryView from './views/StoryView/StoryView';

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorFallback message="Page not found" />,
  },
  {
    Component: CollectionView,
    path: RoutePaths.Collection,
  },
  {
    Component: HomeView,
    path: RoutePaths.Home,
  },
  {
    Component: StoryView,
    path: RoutePaths.Story,
  },
].map((route) => ({
  errorElement: <ErrorFallback />,
  ...route,
})));

export default router;
