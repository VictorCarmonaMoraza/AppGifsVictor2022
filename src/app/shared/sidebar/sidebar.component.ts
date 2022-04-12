import { GifsService } from './../../gifs/services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  visible: boolean = false;


  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  get listado(): string[] {
    if (this.gifsService.historial != null) {
      this.visible = true;
    }
    return this.gifsService.historial;
  }

  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }

}
