import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice:UserService) { }
  usersArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 
  
  
  users: Observable<User[]>;  
  user : User=new User();  
  deleteMessage=false;  
  userObject:any;  
  isupdated = false;     
  ngOnInit(): void {
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.userservice.getUserList().subscribe(data =>{  
    this.users =data;  
    this.dtTrigger.next();  
    })  
  }



  
  deleteUser(id: number) {  
    this.userservice.deleteUser(id)
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.userservice.getUserList().subscribe(data =>{  
            this.users =data  
            })  
        },  
        error => console.log(error));  
  }  
  userupdateform=new FormGroup({  
    iduser:new FormControl(),  
    firstname:new FormControl(),  
    lastname:new FormControl(),  
    email:new FormControl() ,
    password:new FormControl()
  });  
  updateUser(userObj: any){  
    // this.sFirstName();
    this.userupdateform.setValue({
      firstname: userObj.firstname,
      lastname: userObj.lastname,
      iduser:  userObj.iduser,
      email:userObj.email ,
      password:userObj.password
   })
  } 
 
 
  
  updateUsers(upduse:any){  
    this.user=new User();   
   this.user.iduser=this.UserId.value;  
   this.user.firstname=this.FirstName.value;  
   this.user.lastname=this.LastName.value;  
   //this.user.email=this.UserEmail.value;  
   this.user.password=this.UserPassword.value;
   console.log(this.UserPassword.value);  
     
  
   this.userservice.updateUser(this.user.iduser,this.user).subscribe(  
    data => {       
      this.isupdated=true;  
      /*this.userservice.getUserList().subscribe(data =>{  
        console.log(data);
        this.users =data  
        })*/  
        console.log(data);
    },  
    error => console.log(error));  
  }  
  UpdateUser1(form:any)
  {
    //var id = this.user.iduser=this.UserId.value;
    this.userupdateform.setValue({})
    this.userservice.updateUser(id, form)
    .subscribe(data=>
      console.log(data)
      )
  }
  
 

  get FirstName(){  
    return this.userupdateform.get('firstname');  
  }  
 
  get LastName(){  
    return this.userupdateform.get('lastname');  
  }  
  
  get UserEmail(){  
    return this.userupdateform.get('email');  
  }  
  
  get UserPassword(){  
    return this.userupdateform.get('email');  
  }  
  get UserId(){  
    return this.userupdateform.get('iduser');  
  }  
  
  set sUserId(val){  
   this.userupdateform.value(val);  
  }

  changeisUpdate(){  
    this.isupdated=false;  
  }  



}


