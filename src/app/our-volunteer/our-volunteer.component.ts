import {Component, OnInit} from '@angular/core';
import {Child} from '../child';
import {ChildrenService} from '../children.service';

@Component({
  selector: 'app-our-volunteer',
  templateUrl: './our-volunteer.component.html',
  styleUrls: ['./our-volunteer.component.css']
})
export class OurVolunteerComponent implements OnInit {
  child: Child;
  childred: Array<Child> = new Array<Child>();

  constructor(private childService: ChildrenService) {
  }

  ngOnInit(): void {
    this.childService.getUnAssignedCheldren().subscribe(data => {
      // @ts-ignore
      this.childred.push(data);
    });
  }

}
