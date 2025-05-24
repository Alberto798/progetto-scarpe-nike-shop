import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScarpaService } from '../../servizi/scarpa.service';
import { Scarpa } from '../../interfaces/scarpa.interface';
import { CommonModule } from '@angular/common';
import { CartPreviewComponent } from "../../components/cart-preview/cart-preview.component";
import { CartScarpaService } from '../../servizi/cart-scarpa.service';
import { CartItem } from '../../interfaces/cart-item.interface';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, CartPreviewComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {


  id: string | null = null;

  scarpa: Scarpa | undefined;

  currentImage: string | undefined = '';

  showPreview: boolean = false;

  isCartPrewiewVisible = false;

  selectedSize: string = "";



  constructor(private route: ActivatedRoute, private scarpaService: ScarpaService, private router: Router, private cartScarpa: CartScarpaService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id === null) {
      console.error("ID non trovato");

    } else {
      this.scarpaService.getProduct(this.id).subscribe((res: Scarpa | undefined) => {

        this.scarpa = res;

        if (this.scarpa?.immagine) {
          this.currentImage = this.scarpa.immagine;
        }
      })
    }
  }

  selectImg() {
    console.log(this.scarpa?.immagine_secondaria)
    if (this.currentImage) {
      this.currentImage = this.scarpa?.immagine_secondaria;
    }
  }

  onmouseLeave() {
    this.showPreview = false;

  }

  toggleCartPrewiew(): void {

    this.isCartPrewiewVisible = !this.isCartPrewiewVisible;
  }

  addScarpa() {
    if (this.selectedSize === "") {
      alert("Selezionare una taglia");
      return;

    }

    if (this.scarpa) {
      const cartItem: CartItem = {
        id: this.scarpa.id,
        nome: this.scarpa.nome,
        prezzo: this.scarpa.prezzo,
        taglia: this.selectedSize,
        categoria: this.scarpa.categoria,
        immagine: this.scarpa.immagine,
        quantita: 1,

      }
      this.cartScarpa.addScarpa(cartItem); //vado a prendere la funzione addScarpa dal servizio per l'aggiunta di un prodotto al carrello
    }


    this.toggleCartPrewiew();



  }

  changeCurrentImage(imgSecondariaSelected: string) {
    if (imgSecondariaSelected?.length > 0) {
      this.currentImage = imgSecondariaSelected;
    }
  }

  onSizeChanged(size: string) {
    if (this.selectedSize === size) {
      this.selectedSize = "";

      return
    }
    this.selectedSize = size

  }




}


