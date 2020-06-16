import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public isAdmin = false;
  constructor(private authService: AuthService) {
    
    
  }

  

  ngOnInit(): void {
    var currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser && currentUser !== null && currentUser.role==="ADMIN"
  }

}
