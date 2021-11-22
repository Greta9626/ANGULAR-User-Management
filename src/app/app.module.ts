import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router'; /* per importare il routing */

/* IL ROUTING È CORRETTO INSERIRLO IN IN UN FILE DEDICATO A SE */

const routes: Routes = [ /* creo un Array di rotte */
  {
    path: 'users',/* con questo dico una path che contiene la parola users, quindi potebbe essere anche 'users-comp', ma con pathMatch:full potrei dirgli esclusivamnete users, senza altre aggiunte */
    component: UsersComponent /* alla path users associo questo componente, ciò vuol dire che quando troverò scritto 'users' lui mi farà visualizzare quel componente. */
  },
  {
    path: '', /* in questo modo quando la pagina ha l indirizzo solo con localhost:800 mi riporta a users. se lo togliessi lui non mi farebbe vedere nulla */
    pathMatch: 'full', /* qui dico che quando la mia path è esclusivamnete vuota, quindi anche senza spazi allora farà il redirectTo */
    redirectTo: 'users' /* se invece la path è vuota gli dico di collegarsi alla path users, e quindi di conseguenza al componente UsersComponent */
  },
  {
    path: 'users/new',
    component: CreateUserComponent /* importo la classe */
  },
  {
    path: 'users/:id/edit', /* con :id dico che sto passando un parametro in maniera dinamica (cambierà per ogni id selezionato grazie a ':'*/
    component: UpdateUserComponent 
  },
  
] 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) /* importo anche qui il router, e con forRoot indico le rotte che voglio utilizzare su tutta la mia applicazione */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
