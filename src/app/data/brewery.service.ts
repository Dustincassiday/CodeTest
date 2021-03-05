import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brewery } from './brewery.model';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  private readonly _baseUrl = 'https://api.openbrewerydb.org/breweries/';

  constructor(private _http: HttpClient) {}

  public findBreweries(query: string) {
    return this._http.get<Brewery[]>(`${this._baseUrl}?by_name=${query}`);
  }

  public getBrewery(id: string) {
    return this._http.get<Brewery>(`${this._baseUrl}/${id}`);
  }
}
