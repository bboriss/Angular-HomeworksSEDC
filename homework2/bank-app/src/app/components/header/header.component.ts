import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private paymentsService: PaymentsService) {
    console.log('header constructor');
  }

  sum: number = this.paymentsService.totalSum;

  ngOnInit(): void {
    this.paymentsService.sumEmitter.subscribe((value: number) => {
      this.sum = value;
    });
    console.log('Header OnInit');
  }
}
