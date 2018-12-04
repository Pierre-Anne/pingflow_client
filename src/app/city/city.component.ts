import { Component, OnInit } from '@angular/core';
import { city } from './city';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private _cities: CitiesService) {}

  selectedCity : city;

  ngOnInit() {
    this.selectedCity = this._cities.selectedCity;
    this._cities.selectedCityChanged.subscribe(
      (selectedCity: city) => {
        this.selectedCity = selectedCity;
        console.log(selectedCity);
      }
    )
  }

}

