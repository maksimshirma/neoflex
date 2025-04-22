import { FC, useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, RoutesEnum, RoutesNamesMap } from '@/shared';
import './styles.css';

export const Navigation: FC = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleCreditRegistrationClick = useCallback(() => {
    navigate(RoutesEnum.Credits);
  }, []);

  const showAction = pathname === RoutesEnum.Home;

  return (
    <div className='navigation'>
      <div className='navigation__tabs'>
        <NavLink className='navigation__tab' to={RoutesEnum.Home}>
          {RoutesNamesMap[RoutesEnum.Home]}
        </NavLink>
        <NavLink className='navigation__tab' to={RoutesEnum.Credits}>
          {RoutesNamesMap[RoutesEnum.Credits]}
        </NavLink>
        <NavLink className='navigation__tab' to={RoutesEnum.Services}>
          {RoutesNamesMap[RoutesEnum.Services]}
        </NavLink>
      </div>
      {showAction && (
        <div className='navigation__action'>
          <Button text='Оформить кредит' flat onClick={handleCreditRegistrationClick} />
        </div>
      )}
    </div>
  );
};
