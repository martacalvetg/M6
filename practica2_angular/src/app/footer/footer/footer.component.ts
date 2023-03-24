import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent {
  fechaActual = Date.now;

  var3 = { nombreWeb: 'Peliculas', fecha: 2023, copy: 'copyright©'  };
}
