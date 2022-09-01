import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeopleRepositoryService } from './people-repository.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(
    private router: Router,
    private peopleRepoService: PeopleRepositoryService
  ) {}

  peopleSubject = new BehaviorSubject<[]>([]);
  peopleObs$ = this.peopleSubject as Observable<[]>;

  selectedPeopleSubject = new BehaviorSubject<Object | null>(null);
  selectedPeopleObs$ = this.selectedPeopleSubject as Observable<Object | null>;

  getPeople() {
    this.peopleRepoService.fetchPeople().subscribe({
      next: (value) => {
        console.log(value);
        this.peopleSubject.next(value);
      },
      error: (err) => console.error(err),
    });
  }

  getPeopleById(peopleId: number) {
    this.peopleRepoService.fetchPeopleById(peopleId).subscribe({
      next: (value) => this.selectedPeopleSubject.next(value),
      error: (err) => console.error(err),
    });
  }

  onMovieSelect(people: Object) {
    this.selectedPeopleSubject.next(people);
  }
}
