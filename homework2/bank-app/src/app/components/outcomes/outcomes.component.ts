import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
import { Payment } from 'src/app/interfaces/payment.interface';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.scss'],
})
export class OutcomesComponent implements OnInit {
  constructor(private paymentsService: PaymentsService) {}

  outcomes: Payment[] = this.paymentsService.paymentsList.filter(
    (payment) => payment.action === 'outcome'
  );

  ngOnInit(): void {
    this.paymentsService.listEmitter.subscribe((value: Payment[]) => {
      this.outcomes = value.filter((payment) => payment.action === 'outcome');
    });
  }

  onRemove(outcome: Payment) {
    this.paymentsService.onRemove(outcome);
  }
}
