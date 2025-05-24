import { Component, Input } from '@angular/core';
import { Scarpa } from '../../interfaces/scarpa.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

 @Input() product : Scarpa | null = null;

//  @Input() sales : number | null = null

constructor(private router: Router){

}

goToProductDetails(){

  this.router.navigate(['/product-detail', this.product?.id]);



}





  

}
