import { Component, OnInit, Input, Output } from '@angular/core';
import { CitiesService } from '../cities.service';
import { city } from '../city';

@Component({
  selector: 'app-city-selector',
  templateUrl: 'city-selector.component.html',
  styleUrls: ['city-selector.component.scss']
})

export class CitySelectorComponent implements OnInit {

  selectedCity: city;
  cities;

  constructor(private _cities: CitiesService) {
  }


  ngOnInit() {
    this._cities.getCitiesList().subscribe((data: Array<city>) => {
      this.cities = data;
    });
  }

  onSelect() {
      this._cities.selectedCity = this.selectedCity;
  }

}
