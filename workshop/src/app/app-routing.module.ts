import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'people',
    loadChildren: () =>
      import('./features/people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./features/planets/planets.module').then((m) => m.PlanetsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
