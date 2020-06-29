import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './users/edit/edit.component';


const routes: Routes=
[
  {path:"users", component: UsersComponent },
  {path:"users/:id", component:EditComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent]
