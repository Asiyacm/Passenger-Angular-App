import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userinfo-view',
  templateUrl: './userinfo-view.component.html',
  styleUrls: ['./userinfo-view.component.css']
})
export class UserinfoViewComponent {


  constructor(private api:ApiService){

    api.fetchUserinfo().subscribe(

      (response)=>{

        this.userinfo=response
      }
    )
  }
  
  userinfo:any=[]
  

}
