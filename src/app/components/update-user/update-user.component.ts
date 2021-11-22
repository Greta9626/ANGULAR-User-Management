import { UserServiceService } from './../user-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/* import { User } from '../classes/user'; */
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() userUpdate!: any;
  @Output() userSaveUpdate = new EventEmitter();

  constructor(private userService: UserServiceService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { /* si dovrebbe usare paramMap (che serve ad accedere a determinati parametri di una rotta, ovvero l':id passato nella path in app module) al posto di params perché ormai è deprecato, ma non funziona */
      this.userUpdate = this.userService.getUSersById(+params.id);
    });
      /* accedo ai parametri di una specifica rotta */
  }

  saveUpdateUser(): void {
    this.userSaveUpdate.emit(this.userUpdate);
    this.userService.updateUser(this.userUpdate);
    this.router.navigate(['users'])
  }

}
