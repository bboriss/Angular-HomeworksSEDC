import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
import { Payment } from 'src/app/interfaces/payment.interface';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss'],
})
export class IncomesComponent implements OnInit {
  constructor(private paymentsService: PaymentsService) {}

  incomes: Payment[] = this.paymentsService.paymentsList.filter(
    (payment) => payment.action === 'income'
  );

  ngOnInit(): void {
    this.paymentsService.listEmitter.subscribe((value: Payment[]) => {
      this.incomes = value.filter((payment) => payment.action === 'income');
    });
  }

  onRemove(income: Payment) {
    this.paymentsService.onRemove(income);
  }
}
