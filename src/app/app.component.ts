import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  //creating observerable
  // myObservable = new Observable((observer)=>{
  //   console.log("Observable starts");

  //   setTimeout(() => {
  //     observer.next("1");
  //   }, 1000);

  //   // setTimeout(() => {
  //   //   observer.error(new Error("something went wrong")); 
  //   // }, 2000);

  //   setTimeout(() => {
  //     observer.next("3");
  //   }, 3000);

  //   setTimeout(() => {
  //     observer.complete();
  //   }, 4000);


  // })

  array1 = [1,2,3,4]
  array2 = ["A","B","C"]
  myObservable = of(this.array1, this.array2)

  ngOnInit(){
    this.myObservable.subscribe( (val)=>{
      console.log(val);
    },
    (error)=>{
      alert(error.message);
    },
    ()=>{
      alert('Observable has completed emmitting all value')
    }
    )
  }
}
