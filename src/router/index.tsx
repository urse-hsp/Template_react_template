import React, { lazy, Suspense, useEffect } from 'react';
import { useRoutes, type RouteObject, useNavigate } from 'react-router-dom';
import Layout from '@/Layout';
import AppPage from '@/styles/app';
import { LoadingElementWrapper } from '@/components/loading';

const Home = lazy(
  async () => await import(/* webpackChunkName: "home" */ '@/pages/home'),
);

// 重定向
const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};

interface Item {
  path: string;
  exact?: boolean;
  component: any;
  children?: Item[];
}
export interface RouteConfig extends Item {
  children?: Item[];
}

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/*',
        element: <Redirect to="/" />,
      },
    ],
  },
];

const AppRouter = () => {
  const element = useRoutes(routeConfig);
  return (
    <Suspense fallback={LoadingElementWrapper}>
      <AppPage>{element}</AppPage>
    </Suspense>
  );
};
export default AppRouter;
