import { Account } from '../model/types';

const accountInfo: Account = {
  id: 1,
  balance: 5750.2,
  number: '5282 3456 7890 1289',
  date: '09/25',
};

export const getAccountById = (_id: Account['id']): Promise<Account> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(accountInfo);
    }, 500);
  });
};
