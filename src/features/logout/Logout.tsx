import { FC } from 'react';
import { Button, ButtonType, icons } from '@/shared';

export const Logout: FC = () => {
  const handleClick = () => {
    throw new Error('Function not implemented yet.');
  };

  return <Button text='Выход' type={ButtonType.Icon} icon={<icons.Exit />} onClick={handleClick} />;
};
