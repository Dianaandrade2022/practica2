import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datag } from './app.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica2';
  datag:datag[]=[];
  data:any = {
    address:String,
    city:String,
    state:String,
    website:String,
    flickr:String,
    twitter:String,
    elon_twitter:String,
  };
  constructor(private http:HttpClient){
  }
  ngOnInit(){
    this.http.get('https://api.spacexdata.com/v4/company').subscribe((data:Object)=>{this.data=data;});
    this.http.get('https://api.spacexdata.com/v4/capsules').subscribe((datag:any)=>{this.datag=datag;});
  }

}
