import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  miClase:string="bgTurquesa";
  
  cambioDeClaseAzul(){
    this.miClase = 'bgAzul';
  }
  cambioDeClaseRojo(){
    this.miClase = 'bgRojo';
  }
  cambioDeClaseVerde(){
    this.miClase = 'bgVerde';
  }
  cambioDeClaseTurquesa(){
    this.miClase = 'bgTurquesa';
  }
}
