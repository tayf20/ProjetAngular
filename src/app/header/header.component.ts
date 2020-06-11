import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isAdmin= false;

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(data =>{
    if(data.role == 'ADMIN'){
    this.isAdmin = true ;
    }else{
    this.isAdmin= false ;
    }
    })
  }

}
