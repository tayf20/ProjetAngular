import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private httpclient: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  EditMarque(u){
    var id = window.btoa(u.iduser);
    this.router.navigate(['/users/'+id]);
  }
  

}
