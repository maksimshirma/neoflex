import { FC } from 'react';
import { CreditCard } from '@/widgets';
import './styles.css';
import { Button, ButtonType } from '@/shared';

export const Home: FC = () => {
  const handleHistoryClick = () => {
    throw new Error('Function not implemented yet.');
  };

  const handleSupportClick = () => {
    throw new Error('Function not implemented yet.');
  };

  return (
    <div className='home-page'>
      <div className='home-page__card-area'>
        <CreditCard />
        <div className='home-page__buttons'>
          <Button text='История' type={ButtonType.Secondary} onClick={handleHistoryClick} />
          <Button text='Поддержка' type={ButtonType.Secondary} onClick={handleSupportClick} />
        </div>
      </div>
      <div className='home-page__img-area'>
        <img src='/business.png' alt='business' />
      </div>
    </div>
  );
};
