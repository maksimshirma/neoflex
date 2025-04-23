import { makeAutoObservable } from 'mobx';
import { Account, User } from './types';
import { getAccountById, getCurrentUserInfo } from '../api';

class UserStore_ {
  public isUserLoading: boolean = false;
  public isAccountLoading: boolean = false;

  private name: User['name'] | undefined;
  private surname: User['surname'] | undefined;
  private accountId: User['accountId'] | undefined;
  private account: Account | undefined;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  private setIsUserLoading(isLoading: boolean) {
    this.isUserLoading = isLoading;
  }

  private setIsAccountLoading(isLoading: boolean) {
    this.isAccountLoading = isLoading;
  }

  private setName(name: User['name']) {
    this.name = name;
  }

  private setSurname(surname: User['surname']) {
    this.surname = surname;
  }

  private setAccountId(accountId: User['accountId']) {
    this.accountId = accountId;
  }

  private setAccount(account: Account) {
    this.account = account;
  }

  public init() {
    this.setIsUserLoading(true);

    getCurrentUserInfo()
      .then((data) => {
        this.setName(data.name);
        this.setSurname(data.surname);
        this.setAccountId(data.accountId);

        if (this.accountId) {
          this.setIsAccountLoading(true);

          getAccountById(this.accountId)
            .then((data) => {
              this.setAccount(data);
            })
            .finally(() => {
              this.setIsAccountLoading(false);
            });
        }
      })
      .finally(() => {
        this.setIsUserLoading(false);
      });
  }

  public get userFullName() {
    if (!this.surname || !this.name) {
      return null;
    }

    return `${this.surname} ${this.name}`;
  }

  public get accountInfo() {
    if (!this.account) {
      return null;
    }

    return this.account;
  }
}

export const UserStore = new UserStore_();
