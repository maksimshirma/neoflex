import { FC, ReactNode } from 'react';
import './styles.css';

interface Props {
  message: string;
  icon?: ReactNode;
}

export const Notification: FC<Props> = ({ message, icon }) => {
  let notificationClassName = 'notification';
  if (icon) {
    notificationClassName += ' notification_icon';
  }

  return (
    <div className={notificationClassName}>
      {!!icon && <div className='notification__icon'>{icon}</div>}
      <div className='notification__message'>{message}</div>
    </div>
  );
};
