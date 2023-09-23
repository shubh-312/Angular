import { Component, Input, Output, EventEmitter } from '@angular/core';

// The Output artifact is an Angular property decorator that is used when we want to create 
// events that will be triggered from one component up to another. The EventEmitter class 
// is used to emit those events.

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() 
  name = '';

  @Output() 
  bought = new EventEmitter();

  // The buy method calls the emit method on the bought output event we created in the previous step. The emit
  //  method emits an event and notifies any component currently  listening to the event.
  buy() {
    this.bought.emit();
   }

}
