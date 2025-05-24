import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router } from '@angular/router';
import { Scarpa } from '../../interfaces/scarpa.interface';

@Component({
  selector: 'app-cart-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-preview.component.html',
  styleUrl: './cart-preview.component.scss'
})
export class CartPreviewComponent {


  @Input() showPreviews = false

  @Input() scarpa : Scarpa | undefined

  @Output() close = new EventEmitter<void>();

  


  constructor( private router: Router){

  }

  goToCart() : void {
    this.router.navigate(['/cart']);

    
  }

 
  hidePrewiew(): void{
    this.showPreviews = false;
    this.close.emit();
  
  }

}

