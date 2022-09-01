import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsDetailsComponent } from './components/planets-details/planets-details/planets-details.component';
import { PlanetsListComponent } from './components/planets-list/planets-list/planets-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent,
  },
  {
    path: 'details/:id',
    component: PlanetsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
