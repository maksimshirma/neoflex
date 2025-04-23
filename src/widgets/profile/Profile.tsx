import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { UserStore } from '@/entities';
import { icons } from '@/shared';
import './styles.css';

export const Profile: FC = observer(() => {
  const { isUserLoading, userFullName } = UserStore;

  return (
    <div className='profile'>
      <div className='profile__icon'>
        <icons.Person />
      </div>
      <div className='profile__name'>
        {isUserLoading ? 'Загрузка...' : userFullName ? userFullName : 'Пользователь не определён'}
      </div>
    </div>
  );
});
