import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
@Component({
  selector: 'app-our-volunteer',
  templateUrl: './our-volunteer.component.html',
  styleUrls: ['./our-volunteer.component.css']
})
export class OurVolunteerComponent implements OnInit {
   child:Child;
  constructor() { }

  ngOnInit(): void {
  }

}
