import { FC } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { Home } from '@/pages';
import { Header, Layout, Navigation, Profile } from '@/widgets';
import { Logout } from '@/features';
import { RoutesEnum, RoutesNamesMap } from '@/shared';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout header={<Header profile={<Profile />} logout={<Logout />} />} navigation={<Navigation />} />}
    >
      <Route path={RoutesEnum.Home} element={<Home />} />
      <Route path={RoutesEnum.Credits} element={<>{RoutesNamesMap[RoutesEnum.Credits]}</>} />
      <Route path={RoutesEnum.Services} element={<>{RoutesNamesMap[RoutesEnum.Services]}</>} />
      <Route index element={<Navigate to={RoutesEnum.Home} replace />} />
    </Route>,
  ),
);

export const RoutesProvider: FC = () => <RouterProvider router={router} />;
