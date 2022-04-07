import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class GifsService {

  //Campos
  private apikey: string = 'tq09iwgtBFikZk0lzHN0efmzqfKtKdpy';
  private _historial: string[] = [];

  constructor(private http:HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    //Lo agregamos al principio
    //this._historial.unshift(query);

    //Pasamos la query a minuscula
    query = query.trim().toLowerCase();

    //Sino lo incluye lo inserta
    if (!this._historial.includes(query)) {

      //Lo agregamos al principio
      this._historial.unshift(query);

      //deja introducir pero corta 10
      this._historial = this._historial.splice(0, 10);
    }

    //LlAmado al api
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=tq09iwgtBFikZk0lzHN0efmzqfKtKdpy&q=dragon ball z&limit=10')
      .subscribe(resp => {
        console.log(resp);
    })
    //this.comprobarDuplicados(query);
    //console.log(this._historial);
  }

  // comprobarDuplicados(query: string) {
  //   debugger;
  //   if (this._historial.length === 0) {
  //     this._historial.push(query);
  //   } else {
  //     if (this._historial.length === 10) {
  //       return;
  //     }
  //     let element = '';
  //     for (let i = 0; i < this._historial.length; i++) {
  //       if (this._historial[i].trim().toString() == query.trim().toString()) {
  //         return;
  //       }
  //     }
  //     this._historial.unshift(query);
  //   }
  // }
}
