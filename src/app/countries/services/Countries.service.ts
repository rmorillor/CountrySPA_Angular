import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

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
}
