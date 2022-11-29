import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdata-view',
  templateUrl: './userdata-view.component.html',
  styleUrls: ['./userdata-view.component.css']
})
export class UserdataViewComponent {

  constructor(private api:ApiService){

    api.fetchUserdata().subscribe(

      (response)=>{

        this.userdata=response
      }
    )
  }
  


  userdata:any=[]
  
}
