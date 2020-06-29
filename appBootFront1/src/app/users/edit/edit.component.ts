import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id :any
  users  :any
  constructor(private activatedRoute : ActivatedRoute,private userservice : UsersService) { }

  ngOnInit(): void {
    this.id = window.atob(this.activatedRoute.snapshot.params['id']);
    this.userservice.getById(this.id)
    .subscribe(data=>
      {
        this.users = data
      })
  }
  UpdateUser(form)
  {
    this.userservice.editerUser(this.id, form)
    .subscribe(data=>{
      window.location.replace('/users');
    })
  }

}
