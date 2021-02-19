exercice 1

--------------TEMPLATE 
car-item.component.html---------------------

<div class="col-4">

    Editer votre profil

    {{ userName  }}

    <input  [value]="userName" >

    <button class="btn btn-success"  [disabled]="isConnected"> Connexion</button>
    <progress [value]="userLevel" max="400"></progress>

    <img [src]="photo">
    
</div>


--------------CLASS car-item.component.ts---------------------



  photo:string = "";
  
  userName:string= "Olivier";

  userLevel:number= 99;

  isConnected:boolean = true;


 exercice 2
 
  --------------TEMPLATE car-item.compenent.html---------------------

<p>{{ car.name}}</p>
<p>Origine: {{car.pays}} </p>
<p> {{car.power}} CH</p>
<p>0 à 100 km/h : {{car.perf}} sec</p>
<p>{{ bookingMessage }}</p>
<button class="btn btn-primary" (click)="onBooking()" [disabled]="isBooked">Reservez</button>
<hr>

--------------CLASS car-item.component.ts---------------------


import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car:any;

  isBooked:boolean = false;
  bookingMessage:string ="Réserver maintenant !";

  constructor() { }

  ngOnInit(): void {
  }

  onBooking(){
    this.isBooked= true;
    this.bookingMessage= "Vous avez réservé !";
  }

exercice 3 

template car-item.component.html----------------------------------------------------------------autre exemple seul----------------------------------------

<p>Puissance: <span [ngClass]="{'badge':true, 
                                        'badge-info':car.power < 1000, 
                                        'badge-warning':car.power >= 1000}">
                                        {{car.power}} CH </span></p>
        <p>0 à 100 km/h: {{car.perf}} <span *ngIf="car.perf == null">N.C.</span> sec </p>
        <p [ngClass]="{'text-success':isBooked}">{{bookingMessage}}</p>
        <button class="btn btn-primary" (click)="onBooking()" [disabled]="isBooked">Réserver</button>