import { Gif, SearchGifsResponse } from './../interfaces/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root',
})
export class GifsService {

  //Campos
  private apikey: string = 'tq09iwgtBFikZk0lzHN0efmzqfKtKdpy';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    //Recuperar informacion del localStorage
    if (localStorage.getItem('historial')) {
      //Convertimos el string devuelta a su original que era un array de string
      this._historial = JSON.parse(localStorage.getItem('historial')!) ;
    }

    if (localStorage.getItem('resultados')) {
      //Convertimos el string devuelta a su original que era un array de string
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }

    //Otra forma
    //this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    //this._historial = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

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

      //JSON.stringify(this._historial)  -->Coje cualquier objeto y lo transforma a string

      //Grabar en el localStorage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    //Parametros
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', query);

    //LlAmado al api
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((resp )=> {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
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
