import { EventEmitter, Injectable } from '@angular/core';
import { Payment } from '../interfaces/payment.interface';
import { PaymentAction } from '../interfaces/payment-action.enum';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor() {}

  sumEmitter = new EventEmitter<number>();
  listEmitter = new EventEmitter<Payment[]>();

  paymentsList: Payment[] = [
    {
      id: 1,
      name: 'Zara fashion store',
      value: 15,
      time: new Date(2021, 11, 24, 10, 33, 30),
      action: PaymentAction.OUTCOME,
    },
    {
      id: 2,
      name: 'MyCompany',
      value: 600,
      time: new Date(2021, 12, 12, 15, 2, 30),
      action: PaymentAction.INCOME,
    },
    {
      id: 3,
      name: 'Caffe Y',
      value: 5,
      time: new Date(2022, 2, 20, 21, 33, 30),
      action: PaymentAction.OUTCOME,
    },
    {
      id: 4,
      name: 'Restaurant Pleasure',
      value: 35,
      time: new Date(2022, 3, 12, 10, 33, 30),
      action: PaymentAction.OUTCOME,
    },
    {
      id: 5,
      name: 'Discoteque',
      value: 20,
      time: new Date(2022, 4, 24, 22, 33, 30),
      action: PaymentAction.OUTCOME,
    },
    {
      id: 6,
      name: 'MyCompany',
      value: 600,
      time: new Date(2022, 4, 24, 22, 33, 30),
      action: PaymentAction.INCOME,
    },
    {
      id: 7,
      name: 'Restaurant Pleasure',
      value: 35,
      time: new Date(2022, 5, 12, 10, 33, 30),
      action: PaymentAction.OUTCOME,
    },
    {
      id: 8,
      name: 'Outlet fashion stora',
      value: 15,
      time: new Date(2022, 5, 14, 2, 33, 30),
      action: PaymentAction.OUTCOME,
    },
    {
      id: 9,
      name: 'Kafana',
      value: 30,
      time: new Date(2022, 5, 14, 2, 33, 30),
      action: PaymentAction.OUTCOME,
    },
  ];

  totalSum: number = this.paymentsList.reduce((acc, curr) => {
    if (curr.action == 'income') {
      acc += curr.value;
    } else {
      acc -= curr.value;
    }
    return acc;
  }, 0);

  onRemove(payment: Payment) {
    // let index = this.paymentsList.indexOf(payment);
    console.log('final ', this.paymentsList);
    let arrayElement = this.paymentsList.filter((el) => el.id == payment.id)[0];
    console.log(arrayElement);
    this.totalSum =
      arrayElement.action == 'income'
        ? this.totalSum - arrayElement.value
        : this.totalSum + arrayElement.value;
    this.paymentsList = this.paymentsList.filter((object) => {
      return object.id !== arrayElement.id;
    });

    console.log('final ', this.paymentsList);
    this.listEmitter.emit(this.paymentsList);
    this.sumEmitter.emit(this.totalSum);
  }
}
