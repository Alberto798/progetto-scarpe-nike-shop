import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Scarpa } from '../../interfaces/scarpa.interface';
import { CartScarpaService } from '../../servizi/cart-scarpa.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../interfaces/cart-item.interface';




@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  constructor(private router: Router, private cartScarpe: CartScarpaService) { }

  scarpe: CartItem[] | undefined;

  cartTotal: number = 0

  ngOnInit() {

    this.cartScarpe.cartScarpe$.subscribe((scarpe: CartItem[]) => {
      this.scarpe = scarpe

      this.calculateTotal()
    })

  }

  goToCheckOut() {

    this.router.navigate(['/checkout']);
  }


  calculateTotal() {
    this.cartTotal = 0 //
    this.scarpe?.forEach((scarpa: CartItem) => {
      this.cartTotal = (this.cartTotal + (scarpa.prezzo * scarpa.quantita))
    })
    this.cartScarpe.setCartTotal(this.cartTotal)
  }








}
