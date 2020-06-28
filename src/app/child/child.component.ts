import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
import { ChildrenService } from '../children.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  child: Child;
  childred: Array<Child> = new Array<Child>();
  //feedback: any = {};
  constructor(private router: Router,private childService: ChildrenService) { }

  ngOnInit(): void {
   this.childService.getUnAssignedCheldren().subscribe(data => {
      // @ts-ignore
      this.childred=data;
    });
  }
  

}
