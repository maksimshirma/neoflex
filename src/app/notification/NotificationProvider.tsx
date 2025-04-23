import { FC, ReactNode, useCallback, useState } from 'react';
import { Notification, NotificationContext, TShowNotification } from '@/shared';
import { NotificationPortal } from './NotificationPortal';
import './styles.css';

interface Props {
  children: ReactNode;
}

export const NotificationProvider: FC<Props> = ({ children }) => {
  const [notifications, setNotifications] = useState<{ id: number; message: string; icon?: ReactNode }[]>([]);

  let idCounter = 0;

  const showNotification: TShowNotification = useCallback((message, icon, timeout = 3000) => {
    const id = idCounter++;

    setNotifications((prev) => [...prev, { id, icon, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, timeout);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotificationPortal>
        <div className='notifications'>
          {notifications.map(({ id, icon, message }) => (
            <Notification key={id} message={message} icon={icon} />
          ))}
        </div>
      </NotificationPortal>
    </NotificationContext.Provider>
  );
};
