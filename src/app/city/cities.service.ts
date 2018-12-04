import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from '../environment';
import { city } from './city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cityUrl = 'cities';
  private _selectedCity: city;
  selectedCityChanged = new EventEmitter<city>();

  constructor(private http: HttpClient) {}

  getCitiesList() {
    return this.http.get(API_CONFIG.FULL_ENDPOINT + this.cityUrl);
  }

  addCity(add) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    return this.http.post(API_CONFIG.FULL_ENDPOINT + this.cityUrl, JSON.stringify(add), {
      headers: headers
    });
  }

  get selectedCity(): city {
    return this._selectedCity;
  }

  set selectedCity(city: city) {
    this._selectedCity = city;
    this.selectedCityChanged.emit(this._selectedCity);
  }
}
