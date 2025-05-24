import { Component, Input } from '@angular/core';
import { ScarpaService } from '../../servizi/scarpa.service';
import { CartItem } from '../../interfaces/cart-item.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartScarpaService } from '../../servizi/cart-scarpa.service';


@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

  @Input() product: CartItem | null = null;

  private readonly regexTel: RegExp = /^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[4-90]|36[680]|33[13-90]|32[89]|35[01]|37[019])(\s?\d{3}\s?\d{3,4}|\d{6,7})$/
  private readonly regexCittà: RegExp = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/
  private readonly regexCap: RegExp = /^[0-9]{5}$/

  checkoutForm!: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, public cartScarpe: CartScarpaService) {

    this.checkoutForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]], //form control
      cognome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(this.regexTel)]],
      indirizzo: ['', [Validators.required, Validators.minLength(3)]],
      città: ['', [Validators.required, Validators.pattern(this.regexCittà)]],
      cap: ['', [Validators.required, Validators.pattern(this.regexCap)]]


    })

  }



  goToPayment() {
    console.log(this.checkoutForm)
    this.checkoutForm.markAllAsTouched()
    if (this.checkoutForm.valid) {
      this.router.navigate(['/payment'])
    }


  }





}
