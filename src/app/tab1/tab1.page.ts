import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cat = '';
  textoBuscar='';

  componentes: Componente[] = [
    {
      icon: "/assets/galletas.png",
      user: 'DonBear',
      name: 'Galletas surtidas',
      price: '3.000',
      descripcion: 'Surtido de galletas de excelente calidad',

    },
    {
      icon: "/assets/bebidas.jpg",
      user: 'DonMiguelo',
      name: 'Bebidas surtidas',
      price: '7.000',
      descripcion: 'Pack de bebidas originales surtidas de buena calidad y excelente precio ',
      

    },
    {
      icon: "/assets/aceite.png",
      user: 'DonShecho',
      name: 'Aceite belmont',
      price: '3.000',
      descripcion: 'Caja de aceites belmont, contiene 6 unidades en su interior 100% economico',
      

    }
  ];

  constructor() { 
    this.componentes
  }
  buscar (event){
    this.textoBuscar = event.detail.value;
  }
  categoria (evento){
    this.cat = evento.detail.value;
    console.log(evento);
  }

}
interface Componente {
  icon: string;
  user: string;
  name: string;
  price: string;
  descripcion: string;

}