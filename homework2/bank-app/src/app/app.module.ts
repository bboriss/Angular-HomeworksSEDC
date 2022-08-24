import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AllPaymentsComponent } from './components/all-payments/all-payments.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { OutcomesComponent } from './components/outcomes/outcomes.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToggleDetailsDirective } from './directives/toggle-details.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPaymentsComponent,
    IncomesComponent,
    OutcomesComponent,
    FooterComponent,
    ToggleDetailsDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
