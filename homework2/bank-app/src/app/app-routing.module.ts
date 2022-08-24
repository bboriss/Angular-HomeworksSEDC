import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPaymentsComponent } from './components/all-payments/all-payments.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { OutcomesComponent } from './components/outcomes/outcomes.component';

const routes: Routes = [
  { path: '', component: AllPaymentsComponent },
  { path: 'incomes', component: IncomesComponent },
  { path: 'outcomes', component: OutcomesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
