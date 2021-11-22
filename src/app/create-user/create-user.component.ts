import { UserServiceService } from './../user-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  @Output() userCreate = new EventEmitter();

  constructor(private userService: UserServiceService, private router: Router) /* oltre al servizio, qui viene importato anche il routing */ { }

  ngOnInit(): void {
  }

  createUser(): void {
    //this.userCreate.emit(this.user);
    this.userService.insertUser(this.user);
    this.user = new User();
    this.router.navigate(['users']) /* qui dico che voglio essere reindirizzato nella rotta users */
  }

}
