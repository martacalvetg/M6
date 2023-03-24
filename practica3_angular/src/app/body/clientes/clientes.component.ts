import { Component } from '@angular/core';
import { ClientesService } from 'servicios/clientServices';
import { zip } from 'rxjs';
@Component({
  selector: 'app-clientes', 
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  clientes:Cliente[] = [ ];
  clienteName:any = "";
  clienteEmail:any = "";
  clienteProvincia:any = "";
  clienteDestino:any = "";

  constructor(private clienteService:ClientesService){}

    ngOnInit(): void {
      
      zip(this.clienteService.castCliente, this.clienteService.castEmail, this.clienteService.castProvincia, this.clienteService.castDestino)
        .subscribe(([clienteName, clienteEmail, clienteProvincia, clienteDestino]) => {
          const cliente = { name: clienteName, email: clienteEmail, provincia: clienteProvincia, destino: clienteDestino };
          this.clientes.push(cliente);
      });

      this.clienteService.sendClientes(this.clienteName, this.clienteEmail, this.clienteProvincia, this.clienteDestino).subscribe((clientes:Cliente[]) => {
         this.clientes = clientes;
       }   
  );
  }
}
export interface Cliente {name: string; 
                          email: string;
                          provincia: string;
                          destino: string; }
