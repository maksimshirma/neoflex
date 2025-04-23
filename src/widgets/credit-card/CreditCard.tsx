import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { UserStore } from '@/entities';
import { icons } from '@/shared';
import { getBalance, getDate, getNumber } from './helpers';
import './styles.css';

export const CreditCard: FC = observer(() => {
  const { isAccountLoading, accountInfo } = UserStore;

  return (
    <div className='credit-card'>
      <div className='credit-card__ellipse-top'>
        <icons.EllipseTop />
      </div>
      <div className='credit-card__ellipse-bottom'>
        <icons.EllipseBottom />
      </div>
      <div className='credit-card__group'>
        <div className='credit-card__balance'>
          <span className='balance__label'>Баланс</span>
          <span className='balance__amount'>{getBalance(isAccountLoading, accountInfo?.balance)}</span>
        </div>
        <div className='credit-card__watermark'>
          <img src='/mastercard_logo.png' alt='mastercard watermark' />
        </div>
      </div>
      <div className='credit-card__group'>
        <span className='credit-card__number'>{getNumber(isAccountLoading, accountInfo?.number)}</span>
        <span className='credit-card__date'>{getDate(isAccountLoading, accountInfo?.date)}</span>
      </div>
    </div>
  );
});
