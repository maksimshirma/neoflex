import { FC } from 'react';
import { icons } from '@/shared';
import './styles.css';

export const Profile: FC = () => {
  return (
    <div className='profile'>
      <div className='profile__icon'>
        <icons.Person />
      </div>
      <div className='profile__name'>Имя Фамилия</div>
    </div>
  );
};
