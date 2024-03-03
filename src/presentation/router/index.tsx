import { PathRouteProps } from 'react-router-dom';
import Home from '@/presentation/view/home';
import Search from '@/presentation/view/search';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
];
