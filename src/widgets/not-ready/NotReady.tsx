import { FC } from 'react';
import './styles.css';

interface Props {
  text?: string;
}

export const NotReady: FC<Props> = ({ text = 'Страница находится в разработке...' }) => {
  return (
    <div className='not-ready'>
      <span className='not-ready__text'>{text}</span>
    </div>
  );
};
