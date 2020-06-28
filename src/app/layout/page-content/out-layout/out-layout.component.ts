import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-out-layout',
  templateUrl: './out-layout.component.html'
})
export class OutLayoutComponent {
  public isAdmin = false;
  constructor(public authService: AuthService){
    
  }
  ngOnInit(): void {
    var currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser && currentUser !== null && currentUser.role==="ADMIN"
  }
}
