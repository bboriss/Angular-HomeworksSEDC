import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/helpers/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movieTitle = '';
  @Output() emitMovie: EventEmitter<Movie> = new EventEmitter<Movie>();

  movieOne: Movie = {
    name: 'Die Hard',
    releaseDate: new Date(1997, 8, 7),
    producerName: 'John Doe',
    genre: 'action',
  };

  hideButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onShowMovie() {
    this.emitMovie.emit(this.movieOne);
    this.hideButton = true;
  }
}
