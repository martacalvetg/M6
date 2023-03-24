import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {

peliculas = [
  {
    "pelicula": "Avatar 2",
    "duracion": "3h 12m",
    "genero": "Acción, ciencia ficción",
    "director": "James Cameron"
  },
  {
    "pelicula": "Creed 3",
    "duracion": "1h 57m",
    "genero": "Drama, Deportes",
    "director": "Michael B. Jordan"
  },
  {
    "pelicula": "Llaman a la puerta",
    "duracion": "1h 40m",
    "genero": "Terror, Misterio",
    "director": "M. Night Shyamalan"
  },
  {
    "pelicula": "La niña de la comunión",
    "duracion": "2h",
    "genero": "Terror",
    "director": "Víctor García"
  }
]
}
