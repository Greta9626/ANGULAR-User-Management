import { Injectable } from '@angular/core';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'leannegraham@april.biz',
      phone: '332 4938903',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'ervinhowell@melissa.tv',
      phone: '734 4930948',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'clementineauch@yesenia.net',
      phone: '123 3908403',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'patricialebsack@kory.org',
      phone: '457 3984930',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'chelseydietrich@annie.ca',
      phone: '124 0893048',
      website: 'demarco.info',
    }];

  constructor() { }

  public getUsers(): User[] {
    return this.users;
  }
  
  public getUSersById(id: number) {
    return this.users.find(user => user.id === id)
  } /* metodo che mi permette di restituire un utente tramite id. */

  public insertUser(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  public deleteUser(user: User): void {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  public updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users.splice(index, 1, user);
  }
}
