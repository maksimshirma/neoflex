import { FC, ReactNode } from 'react';
import { icons } from '@/shared';
import './styles.css';

interface Props {
  profile: ReactNode;
  logout: ReactNode;
}

export const Header: FC<Props> = ({ profile, logout }) => {
  return (
    <header className='header'>
      <div className='header__profile'>{profile}</div>
      <div className='header__contacts'>
        <div>{<icons.Phone />}</div>
        <div className='contacts__number'>8 800 800-08-08</div>
      </div>
      <div className='header__logout'>{logout}</div>
    </header>
  );
};
