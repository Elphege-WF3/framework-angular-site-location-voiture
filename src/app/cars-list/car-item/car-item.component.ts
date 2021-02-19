import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car:any;

  isBooked:boolean = false;
  
  bookingMessage: string = "Réserver maintenant !";
  
  constructor() { }

  ngOnInit() {
  }

  onBooking(){
    this.isBooked= true;
    this.bookingMessage= "Bonne route ! [réservée]";
  }
  
}
