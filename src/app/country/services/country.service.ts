import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import constants from 'src/config/constants.json';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService
{
  constructor(private http: HttpClient)
  { }

  searchCountry(term: string): Observable<Country[]>
  {
    return this.http.get<Country[]>(`${constants.API_URL}name/${term}`);
  }
}