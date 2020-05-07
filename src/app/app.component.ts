import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { Observable,from } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'MaterialDemo';
  notifications = 223;
  showSpinner = false;
  opened=false;
  selectedValue:string;

  options: string[] = ["Angular","React","Vue"];
  objectOptions = [
    { name: 'Angular'},
    { name: 'Angular Materail'},
    { name: 'React'},
    { name: 'Vue'}
  ];
  inputControl = new FormControl('');
  obserableOptions: Observable<string []>;
  testObserable: Observable<number>;

  greaterThree(e){
    return e>3;
  }
  ngOnInit(){
    // let test = [1,2,3,4,5,6,7,8].filter(this.greaterThree);
    // let test = [1,2,3,4,5,6,7,8].filter(
    //   e => {
    //     return e>4;
    //   } 
    // );
    // console.log("test:",test);
    // this.testObserable = from([1,2,3,4]).pipe(
    //   map(x => x + 1),
    //   filter(x => x > 4)
    // );
    
    this.obserableOptions = this.inputControl.valueChanges.pipe(
      //startWith(''),
      map( value=>{
        let s =  this._filter(value);
        console.log("ssss",s);
        return s;
      })
    );
  }
  _filter(value: string){
    const fitlerValue = value;//.toLowerCase();
    console.log("fitlerValue",fitlerValue);
    let result = this.options.filter( option => {
      console.log("option:",option.includes(value));
      return option.includes(value);
    });

    console.log("result:",result);
    return result;
  }
  displayFn(object){
    console.log("object",object);
    let result = object?.name != null ? object?.name : object;
    console.log("displayFn",result);
    return result;
  }
  loadData(){
    this.showSpinner = true;
    setTimeout( ()=>{
      this.showSpinner=false;
    }, 3000);
  }
  logState(state){
    console.log(state);
  }
  changeTab(tabRef){
    console.log(tabRef.selectedIndex);
  }
}
