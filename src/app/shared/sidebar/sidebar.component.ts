import { GifsService } from './../../gifs/services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  get listado():string[] {
    return this.gifsService.historial;
  }

}
