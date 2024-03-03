import { PathRouteProps } from 'react-router-dom';
import Home from '@/presentation/view/home';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
];
