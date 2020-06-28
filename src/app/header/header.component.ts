import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public isAdmin = false;
public isLogedIn = false;
public showHideSlideBar:boolean=false;

  constructor(public authService: AuthService) {


  }

  onShowSideBarChange(){
    this.showHideSlideBar=!this.showHideSlideBar;
    }

  ngOnInit(): void {
    var currentUser = this.authService.getCurrentUser();
    if(currentUser)
    this.isLogedIn = true;

    this.isAdmin = currentUser && currentUser !== null && currentUser.role==="ADMIN"
  }

}
