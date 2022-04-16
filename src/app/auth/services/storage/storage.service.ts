import { Injectable } from '@angular/core';
import { IResAuthLogin } from '../../model/user-storage-data.model';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  setData({ login, token }: IResAuthLogin): void {
    localStorage.setItem(
      'user', JSON.stringify({ login, token })
    )
  }

  getData(field: string): string {
    const data = localStorage.getItem('user');
    return data
      ? JSON.parse(data)[field] :
      null;
  }

  public clear() {
    localStorage.removeItem('user');
  }
}
