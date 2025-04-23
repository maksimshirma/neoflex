import { createContext } from 'react';
import { NotificationContext as INotificationContext } from './types';

export const NotificationContext = createContext<INotificationContext | null>(null);
