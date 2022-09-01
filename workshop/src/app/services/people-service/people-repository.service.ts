import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const SWAPI_PEOPLE_URL = 'https://swapi.dev/api/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleRepositoryService {
  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<[]> {
    return this.http.get(SWAPI_PEOPLE_URL).pipe(map((value) => value as []));
  }

  fetchPeopleById(peopleId: number): Observable<Object> {
    return this.http
      .get(`${SWAPI_PEOPLE_URL}/${peopleId}`)
      .pipe(map((value) => value as Object));
  }
}
