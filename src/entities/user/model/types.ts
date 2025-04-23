export interface User {
  name: string;
  surname: string;
  accountId: Account['id'];
}

export interface Account {
  id: number;
  balance: number;
  number: string;
  date: string;
}
