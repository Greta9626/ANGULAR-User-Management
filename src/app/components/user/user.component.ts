import { UserServiceService } from './../user-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Output() userUpdate = new EventEmitter();

  constructor(private userService: UserServiceService, private routes: Router) { }
  /* grazie all'injectable di un servizio posso inniettare all'interno del parametro del costruttore il servizio stesso */

  ngOnInit(): void {
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  } /* questo serve per richiamare il metodo deleteUser che si trova all'interno del servizio userService. */

  updateUser(user: User): void {
    /* this.userUpdate.emit(user); */
    this.routes.navigate(['users', this.user.id, 'edit'])
  }

}
