import { Component, OnInit } from '@angular/core';
import carData from 'src/app/json/cars.json';

interface Car {
  id: Number;
  znacka: String;
  model: String;
  motor: String;
  vykon: String;
  druhMotoru: String;
  objem: String;
  pocetDveri: String;
  pocetKm: String;
  vin: String;
  spz: String;
  rokVyroby: String;
  palivo: String;
  euro: String;
  sezeni: String;
  prevodovka: String;
  pocetStupnu: String;
  spotrebaMimo: String;
  spotrebaMesto: String;
  spotrebaPrumer: String;
  img1: String;
  img2: String;
  img3: String;
  img4: String;
  img5: String;
  img6: String;
  img7: String;
  img8: String;
  img9: String;
  img10: String;
  cena: String;
}


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = carData;

  constructor() { }

  ngOnInit(): void {
  }

}
