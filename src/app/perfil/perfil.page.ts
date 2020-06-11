import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  constructor() {
    this.pubs
   }

  ngOnInit() {
  }

  pubs: Componente[] = [
    {
      id: '0',
      icon: "/assets/arroz.png",
      user: 'Donde Ale',
      name: 'Arroz Tucapel',
      estado: 'publicado',
      price: '2.000',
      descripcion: 'El mejor arroz pre-graneado del mercado',

    },
    {
      id: '1',
      icon: "/assets/clorox.jpg",
      user: 'DonMiguelo',
      name: 'Clorox',
      estado: 'observacion',
      price: '4.000',
      descripcion: 'El mejor limpiador de germenes',
      

    }
  ];

}
interface Componente{
  id: string;
  icon: string;
  user: string;
  name: string;
  estado: string;
  price: string;
  descripcion: string;

}
