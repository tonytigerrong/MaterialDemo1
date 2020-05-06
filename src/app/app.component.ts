import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MaterialDemo';
  notifications = 223;
  showSpinner = false;
  loadData(){
    this.showSpinner = true;
    setTimeout( ()=>{
      this.showSpinner=false;
    }, 3000);
  }
}
