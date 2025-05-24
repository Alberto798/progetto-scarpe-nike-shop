import { Component, OnInit } from '@angular/core';
import { ScarpaService } from '../../servizi/scarpa.service';
import { Scarpa } from '../../interfaces/scarpa.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../interfaces/category.enums';
import { Sport } from '../../interfaces/sport.enums';
import { Price } from '../../interfaces/price.enums';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{


  colore : {title: string, title2: string, title3: string, title4:string, title5: string, title6: string, title7: string, title8: string, title9: string} = {

     title: 'Rosso',
     title2: 'Verde',
     title3: 'blu',
     title4: 'Giallo',
     title5: 'Nero',
     title6: 'Bianco',
     title7: 'Arancione',
     title8: 'Marrone',
     title9: 'Viola'
   
   };

   selectedSport : Sport | undefined

   selectedPrezzo : number | undefined

   priceEnum = Price
  
   sportEnum = Sport 
   
   selectedColor: string = ""

   products: Scarpa[] = []

   category: Category | undefined
   
   constructor(private scarpaService: ScarpaService, private route: ActivatedRoute ){}

  ngOnInit(): void {

    // const category = this.route.snapshot.queryParamMap.get('category') as Category
    this.route.queryParams.subscribe(params => {  //ogni volta che cambia un parametro
      this.category = params['category']
      this.scarpaService.getScarpe(this.category).subscribe((prodotti: Scarpa[]) => {
        this.products = prodotti;
        console.log(this.products)
      })
    }) 
}

isAccordionOpen : {[key: string]: boolean} = 
{
  'colore': false,
  'categories': false,
  'prezzo': false
}

  itemClicked(key : string): void{

    this.isAccordionOpen[key] =!this.isAccordionOpen[key] 

   
  }

  applyFilter(){
    const filters = {
      color: this.selectedColor,
      sport: this.selectedSport,
      prezzo: this.selectedPrezzo 
 
    }
    this.scarpaService.getScarpe(this.category, filters).subscribe((prodotti: Scarpa[]) => {
      this.products = prodotti;
      
    })
  }

  onColorChanges(event:Event, color: string){
    event.stopPropagation()
    this.selectedColor = color
    this.applyFilter()
  }


  onSportChanges(event: Event, sport: Sport){
    event.stopPropagation()
    this.selectedSport = sport
    this.applyFilter()

  }

  onPriceChanges(event:Event, price: Price){
    event.stopPropagation()
    this.selectedPrezzo = price
    this.applyFilter()

  }


  }
    

    
    
     
      
    
  




