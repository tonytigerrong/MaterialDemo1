import { Component } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MaterialDemo';
  notifications = 223;
  showSpinner = false;
  opened=false;
  loadData(){
    this.showSpinner = true;
    setTimeout( ()=>{
      this.showSpinner=false;
    }, 3000);
  }
  logState(state){
    console.log(state);
  }
}
