import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  updateForm = false;
  user!: User;
  users: User[] = []; /* creo un array vuoto dove vado ad iniettare il servizio successivamente con getUsers (che legge i dati dell'array su user-service.service) */

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onUpdateUser(user: User): void {
    this.updateForm = true;
    const userCopy = Object.assign({}, user);
    this.user = userCopy;
  }

  /* onDeleteUser(user: User): void {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  } */

  /*onCreateUser(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }*/

  onUserSaveUpdate(user: User): void {
    /*const index = this.users.findIndex(u => u.id === user.id);
    this.users.splice(index, 1, user);*/
    this.updateForm = false;
  }

}
