import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('busqueda') txtBuscar!: ElementRef<HTMLInputElement>;

  //constructor() { }

  ngOnInit(): void {
  }

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    this.txtBuscar.nativeElement.value = '';
  }

}
