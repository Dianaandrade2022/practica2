import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

export class datag{
  reuse_count:Number;
  water_landings:Number;
  land_landings:Number;
  last_update:String;
  launches:String;
  serial:String;
  status:String;
  type:String;
  id:String;

  constructor(reuse_count:Number,water_landings:Number,land_landings:Number,last_update:String,launches:String,serial:String,status:String,type:String,id:String,){
      this.reuse_count = reuse_count;
      this.water_landings = water_landings;
      this.land_landings = land_landings;
      this.last_update = last_update;
      this.launches = launches;
      this.serial = serial;
      this.status = status;
      this.type = type;
      this.id = id;
    }
}
