import {Component, OnInit} from '@angular/core';
import {Child} from '../child';
import {ChildrenService} from '../children.service';
import { Router } from '@angular/router';
import { Donate } from '../donate/donate';

@Component({
  selector: 'app-our-volunteer',
  templateUrl: './our-volunteer.component.html',
  styleUrls: ['./our-volunteer.component.css']
})
export class OurVolunteerComponent implements OnInit {
  child: Child;
  childred: Array<Child> = new Array<Child>();
  
  isOpen:boolean=false;
  constructor(private childService: ChildrenService,private router: Router) {
  }
  

  ngOnInit(): void {
    this.childService.getUnAssignedCheldren().subscribe(data => {
      // @ts-ignore
      this.childred=data;
    });
  }

  donateopen(id){
    console.log(id.idchild);
   this.router.navigate(['/donate',id.idchild]);
  }
  showOption(child){
  child.isOpen = !child.isOpen;
  console.log(child.isOpen);
  }

  
}
