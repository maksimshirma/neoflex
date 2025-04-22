import { FC } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { Header, Layout, Profile } from '@/widgets';
import { Logout } from '@/features';
import { RoutesEnum, RoutesNamesMap } from '@/shared';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout header={<Header profile={<Profile />} logout={<Logout />} />} navigation={<></>} />}
    >
      <Route path={RoutesEnum.Home} element={<>{RoutesNamesMap[RoutesEnum.Home]}</>} />
      <Route path={RoutesEnum.Credits} element={<>{RoutesNamesMap[RoutesEnum.Credits]}</>} />
      <Route path={RoutesEnum.Services} element={<>{RoutesNamesMap[RoutesEnum.Services]}</>} />
      <Route index element={<Navigate to={RoutesEnum.Home} replace />} />
    </Route>,
  ),
);

export const RoutesProvider: FC = () => <RouterProvider router={router} />;
