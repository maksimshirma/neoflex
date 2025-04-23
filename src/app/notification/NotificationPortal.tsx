import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

export const NotificationPortal: FC<Props> = ({ children }) => {
  const root = document.getElementById('notification-root');

  return root ? ReactDOM.createPortal(children, root) : null;
};
