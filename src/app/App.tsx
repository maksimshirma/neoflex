import { NotificationProvider } from './notification';
import { RoutesProvider } from './router';
import './styles.css';
import './fonts/fonts.css';

export const App = () => {
  return (
    <NotificationProvider>
      <RoutesProvider />
    </NotificationProvider>
  );
};
