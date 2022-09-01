import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './components/people-list/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people-details/people-details/people-details.component';

import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [PeopleListComponent, PeopleDetailsComponent],
  imports: [CommonModule, PeopleRoutingModule],
})
export class PeopleModule {}
