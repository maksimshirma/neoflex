import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';

interface Props {
  header: ReactNode;
  navigation: ReactNode;
}

export const Layout: FC<Props> = ({ header, navigation }) => {
  return (
    <article className='layout'>
      <div className='layout__header'>{header}</div>
      <div className='layout__navigation'>{navigation}</div>
      <Outlet />
    </article>
  );
};
