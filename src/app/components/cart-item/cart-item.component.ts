import { Component, Input } from '@angular/core';
import { Scarpa } from '../../interfaces/scarpa.interface';
import { Router } from '@angular/router';
import { ScarpaService } from '../../servizi/scarpa.service';
import { CommonModule } from '@angular/common';
import { CartScarpaService } from '../../servizi/cart-scarpa.service';
import { CartItem } from '../../interfaces/cart-item.interface';





@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  constructor(private cartScarpe: CartScarpaService) {

  }

  @Input() product: CartItem | null = null;

  addScarpa() {
    if (this.product) {
      this.cartScarpe.addScarpa(this.product);

    }

  }

  removeScarpa() {
    if (this.product) {
      this.cartScarpe.removeScarpa(this.product.id, this.product.taglia);
    }
  }






}





