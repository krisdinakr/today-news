import { PathRouteProps } from 'react-router-dom';
import Home from '@/presentation/view/home';
import Search from '@/presentation/view/search';
import DetailArticle from '@/presentation/view/detail-article';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/article/:query/:source/:author',
    element: <DetailArticle />,
  },
];
