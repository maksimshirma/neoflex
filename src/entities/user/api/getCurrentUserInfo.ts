import { User } from '../model/types';

const userInfo: User = {
  name: 'Василий',
  surname: 'Пупкин',
  accountId: 1,
};

export const getCurrentUserInfo = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(userInfo);
    }, 1500);
  });
};
