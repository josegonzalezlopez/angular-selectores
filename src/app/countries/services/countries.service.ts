import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { Region, SmallCountry } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService { 

  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _region: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ];

  constructor(private httpClient: HttpClient) { }

  get region(): Region[]{
    return [...this._region];
  }

  public getCoutries(region: Region): Observable<SmallCountry[]>{
      if(!region) return of([]);
      const url: string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
      return this.httpClient.get<SmallCountry[]>(url)
      .pipe(
        tap(response => console.log(response))      
       );
    }

}
