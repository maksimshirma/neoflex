import { FC } from 'react';
import './styles.css';
import { icons } from '@/shared';

export const CreditCard: FC = () => {
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
          <span className='balance__amount'>₽5,750,20</span>
        </div>
        <div className='credit-card__watermark'>
          <img src='/mastercard_logo.png' alt='mastercard watermark' />
        </div>
      </div>
      <div className='credit-card__group'>
        <span className='credit-card__number'>5282 3456 7890 1289</span>
        <span className='credit-card__date'>09/25</span>
      </div>
    </div>
  );
};
