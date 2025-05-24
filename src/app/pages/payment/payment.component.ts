import { Component, OnInit } from '@angular/core';
import { CartScarpaService } from '../../servizi/cart-scarpa.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {




  constructor(public cartService: CartScarpaService, private router: Router) {

  }


  goTothankYou() {

    this.router.navigate(['thankyou']).then()

  }

}
