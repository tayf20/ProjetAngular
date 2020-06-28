import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Donate } from './donate';
import { DonateService } from '../donate.service';
import { ChildDonaterModel } from '../childDonator.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  idchild: any;
  route: any;
  donatorname: any;
  donatoremail: any;
  success: boolean;
  public total : any;
  donate:Donate ;
  childId:number;
    
  constructor( private router: ActivatedRoute,private donator:DonateService) { 

   

  }

  ngOnInit(): void {
    //console.log(this.router.params.subscribe((params: Params) => this.idchild = params['id']));
   this.childId = this.router.snapshot.params.id;

  }

  onSubmit() {


   
  console.log('id= ',this.childId);
 
 this.saveNewChildDonator();

}
  saveNewChildDonator(){
    let dataRequest = new ChildDonaterModel(this.childId,1,110);
    console.log('- ', dataRequest)
    this.donator.addNewDonate(dataRequest).subscribe(
      (Response) =>{
        console.log('output = ', Response);
      }
    )
  }

}
