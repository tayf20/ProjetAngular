import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildrenService } from '../children.service';
import { Child } from '../child';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {
//  addForm: FormGroup;
submitted = false;
child: Child = new Child();
  constructor(private formBuilder: FormBuilder,private router: Router,private childService: ChildrenService) { }

  ngOnInit(): void {
   /* this.addForm = this.formBuilder.group({
      idchild: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      old: ['', Validators.required],
      sexe: ['', Validators.required],
      datenaissance: ['', Validators.required],
      ville: ['', Validators.required],
      adress: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description:['', Validators.required]
    });*/

  }
  newChild(): void {
    this.submitted = false;
    this.child = new Child();
  }
  save() {
    this.childService.createChild(this.child)
      .subscribe(data => console.log(data), error => console.log(error));
    this.child = new Child();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/child']);
  }
}
