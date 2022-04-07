import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('busqueda') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    //Para evitar ue se metan vacios en la caja de texto
    if (valor.trim().length===0) {
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
