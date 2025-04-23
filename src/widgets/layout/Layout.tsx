import { FC, ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { UserStore } from '@/entities';
import './styles.css';

interface Props {
  header: ReactNode;
  navigation: ReactNode;
}

export const Layout: FC<Props> = observer(({ header, navigation }) => {
  const { init } = UserStore;

  useEffect(() => {
    init();
  }, []);

  return (
    <article className='layout'>
      <div className='layout__header'>{header}</div>
      <div className='layout__navigation'>{navigation}</div>
      <Outlet />
    </article>
  );
});
