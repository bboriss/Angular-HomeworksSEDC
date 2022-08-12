import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTitle: string = 'Movie Of The Week';
  movieTitle: string = 'Blockbuster of the week';
}
