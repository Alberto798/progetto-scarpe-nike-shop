import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  //inietto il servizio per il routing
  constructor(private router : Router ){}  // permette la navigazione tra i componenti

  goToAllProduct(){

    this.router.navigate(['/products']).then()
  }

}
