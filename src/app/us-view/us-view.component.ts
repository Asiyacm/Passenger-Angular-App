import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-us-view',
  templateUrl: './us-view.component.html',
  styleUrls: ['./us-view.component.css']
})
export class UsViewComponent {

  constructor(private api:ApiService){

    api.fetchUs().subscribe(

      (response)=>{

        this.us=response
      }
    )
  }
  

  us:any=[]
  

}
