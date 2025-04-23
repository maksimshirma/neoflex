import { Account } from '@/entities';

export const getBalance = (isAccountLoading: boolean, balance?: Account['balance']) => {
  if (!isAccountLoading && !balance) {
    return 'Здесь будет баланс';
  }

  if (isAccountLoading) {
    return 'Считаем нули...';
  }

  return `₽${balance}`;
};

export const getNumber = (isAccountLoading: boolean, number?: Account['number']) => {
  if (!isAccountLoading && !number) {
    return 'Здесь будет номер карты';
  }

  if (isAccountLoading) {
    return 'Проверяем единицы...';
  }

  return number;
};

export const getDate = (isAccountLoading: boolean, date?: Account['date']) => {
  if (!isAccountLoading && !date) {
    return 'Здесь будет номер карты';
  }

  if (isAccountLoading) {
    return 'Сверяем даты...';
  }

  return date;
};
