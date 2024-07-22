import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        // tap(countries => console.log('paso por el tab', countries)), // efectos secundarios
        // map(countries => []) // lo que retorna, transforma la info
        catchError(() => of([])) // el of de rxjs sirver para construir un observable basado en el argumento que yo le mando, en lugar del error retorna un arreglo vacio
        // catchError( error => {
        //   console.log(error);
        //   return of([])
        // })
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }
}
