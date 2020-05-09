import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { Observable,from,of } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loadTableData(row){
    console.log(row);
  }
  applyFilter(value: string){
    console.log(value);
    this.dataSource.filter = value.trim().toLowerCase();
  }
  constructor(private snackbar: MatSnackBar,
              private dialog: MatDialog
    ){

  }
  title = 'MaterialDemo';
  notifications = 223;
  showSpinner = false;
  opened=false;
  selectedValue:string;
  selectedValue1:string;
  options: string[] = ["Angular","React","Vue"];
  objectOptions = [
    { name: 'Angular'},
    { name: 'Angular Materail'},
    { name: 'React'},
    { name: 'Vue'}
  ];
  inputControl = new FormControl('');
  myRadio = new FormControl('Angular');
  obserableOptions: Observable<string []>;
  testObserable: Observable<number>;
  minDate= new Date();
  maxDate= new Date(2020,5,15);
  openSnackBar(message,action){
    let barWindow = this.snackbar.open(message,action,{duration: 2000});
    barWindow.afterDismissed().subscribe(
      ()=>{
        console.log("dismissed snack bar");
      }
    );
    barWindow.onAction().subscribe(
      ()=>{
        console.log("onAction, action name");
      }
    );
  }
  openMyCustomSnackBar(){
    this.snackbar.openFromComponent(MySnackbarComponent,{duration: 3000});
  }
  openDialog(){
    this.dialog.open(MySnackbarComponent);
  }
  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
  greaterThree(e){
    return e>3;
  }
  testPipe(){
    let test = of(1,2,3,4).pipe(
      map(x=>x+1), // 2,3,4,5
      filter(x=>x>2), //3,4,5
      map(x=>x+1)//4,5,6
    );
    test.subscribe(data=>{
      console.log("testPipe",data);
    });
    
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
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

@Component(
  {
    selector: 'custom-snackbar',
    template: `<span style='color:orange'>Custom Snackbar</span>`
  }
)
export class MySnackbarComponent {}
