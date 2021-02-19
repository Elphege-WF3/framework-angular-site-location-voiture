import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate:any ;

  cars: any = [
    {
      name: "pagani huayra",
      pays: "italie",
      coverImage:"./assets/img/cars/pagani.jpg",
      power: 765,
      perf: 3.2,
      stock: 5
    },
    {
      name: "koenigsegg agera rs",
      pays: "suède",
      coverImage:"./assets/img/cars/koenigsegg.jpg",
      power: 1383,
      perf: 2.6,
      stock: 3

    },
    {
      name: "zenvo tsr s",
      pays: "danemark",
      coverImage:"./assets/img/cars/zenvo.jpg",
      power: 1200,
      perf: 2.8,
      stock: 4
    },
    {
      name: "bugatti chiron",
      pays: "france",
      coverImage:"./assets/img/cars/bugatti.jpg",
      power: 1500,
      perf: 2.4,
      stock: 3
    },
    {
      name: "mercedes amg one",
      pays: "allemagne",
      coverImage:"./assets/img/cars/mercedes.jpg",
      power: 1000,
      perf: 2.2,
      stock: 5
    },
    {
      name: "ferrari sf90",
      pays: "italie",
      coverImage:"./assets/img/cars/ferrari.jpg",
      power: 1000,
      perf: 2.5,
      stock: 2
    }
  ];

  constructor() { }

  ngOnInit() {
    this.carUpdate = new Date();
  }

}
