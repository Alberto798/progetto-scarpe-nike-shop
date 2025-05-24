import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../../interfaces/category.enums';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router){

  }

  goToNuoviArrivi(){

    this.router.navigate(['/products'], {queryParams: {category : Category.nuovoArrivo}})  //parametri


  }

  goToBestSeller(){
    
    this.router.navigate(['/products'], {queryParams: {category : Category.bestSeller}})
  }


  

}
