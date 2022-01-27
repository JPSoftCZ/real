import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import carData from "../json/cars.json";

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
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const carIdFromRoute = Number(routeParams.get('id'));

    this.car = carData.find(car => car.id === carIdFromRoute);
  }

}
