import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people-service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
  constructor(private peopleService: PeopleService) {}

  get peopleObs$() {
    return this.peopleService.peopleObs$;
  }

  ngOnInit(): void {
    this.peopleService.getPeople();
  }

  onPeopleClick(movie: Object) {
    this.peopleService.onMovieSelect(movie);
  }
}
