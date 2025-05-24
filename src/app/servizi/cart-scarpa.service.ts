import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Scarpa } from "../interfaces/scarpa.interface";
import { CartItem } from "../interfaces/cart-item.interface";

@Injectable({
  providedIn: 'root' // This service is available for all components in the application
})
export class CartScarpaService {

  private cartScarpeSource = new BehaviorSubject<CartItem[]>([]) //
  cartScarpe$ = this.cartScarpeSource.asObservable();

  private totalCartSource = new BehaviorSubject<number>(0) //
  totalCart$ = this.totalCartSource.asObservable();

  addScarpa(scarpa: CartItem): void {
    const scarpeAttuali: CartItem[] = this.cartScarpeSource.getValue()
    const scarpaEsistente: CartItem | undefined = scarpeAttuali.find((cartItem: CartItem) => {
      return cartItem.id === scarpa.id && cartItem.taglia === scarpa.taglia
    })
    if (scarpaEsistente) {
      scarpaEsistente.quantita += 1
    } else {
      scarpeAttuali.push(scarpa)
    }
    this.cartScarpeSource.next(scarpeAttuali)  //così chi è in ascolto riceverà la lista aggiornata di scarpe

  }

  removeScarpa(id: number, taglia: string): void {
    let scarpeAttuali: CartItem[] = this.cartScarpeSource.getValue()
    const scarpaEsistente: CartItem | undefined = scarpeAttuali.find((cartItem: CartItem) => {
      return cartItem.id === id && cartItem.taglia === taglia

    })
    if (scarpaEsistente && scarpaEsistente.quantita > 1) {
      scarpaEsistente.quantita -= 1
    } else {
      scarpeAttuali = scarpeAttuali.filter((scarpa: CartItem) => {
        return !(scarpa.id === id && scarpa.taglia === taglia)
      })
    }

    this.cartScarpeSource.next(scarpeAttuali) //così chi è in ascolto riceverà la lista aggiornata di scarpe

  }

  getScarpe(): CartItem[] {
    const scarpeAttuali: CartItem[] = this.cartScarpeSource.getValue()
    return scarpeAttuali
  }

  getCartTotal(): number {
    return this.totalCartSource.getValue()

  }

  setCartTotal(cartTotal: number): void {

    this.totalCartSource.next(cartTotal)


  }

}