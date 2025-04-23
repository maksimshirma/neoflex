import { ReactNode } from 'react';

export type ShowNotification = (message: string, icon?: ReactNode, timeout?: number) => void;

export interface NotificationContext {
  showNotification: ShowNotification;
}
