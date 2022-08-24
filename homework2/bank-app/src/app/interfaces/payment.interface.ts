import { PaymentAction } from './payment-action.enum';

export interface Payment {
  id: number;
  name: string;
  value: number;
  time: Date;
  action: PaymentAction;
}
