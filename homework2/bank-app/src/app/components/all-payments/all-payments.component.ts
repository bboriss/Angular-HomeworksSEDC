import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/interfaces/payment.interface';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.scss'],
})
export class AllPaymentsComponent implements OnInit {
  constructor(private paymentsService: PaymentsService) {
    console.log('all payments constructor');
  }

  payments: Payment[] = this.paymentsService.paymentsList;

  ngOnInit(): void {
    console.log('all-payments OnInit');
    this.paymentsService.listEmitter.subscribe((value: Payment[]) => {
      this.payments = value;
    });
  }

  onRemove(payment: Payment) {
    this.paymentsService.onRemove(payment);
  }
}
