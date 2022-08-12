import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/helpers/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() listTitle = '';
  @Input() movieTitle = '';
  selectedMovie: Movie | null = null;

  constructor() {}

  ngOnInit(): void {}

  onShowMovie(value: Movie) {
    this.selectedMovie = value;
  }
}
