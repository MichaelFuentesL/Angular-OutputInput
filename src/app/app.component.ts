import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuarios = [];

  constructor(
    private _http: HttpClient
  ) {}

  ngOnInit() {

    // @ts-ignore
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((datos:any[]) => this.usuarios = datos )
  }

  borrarUsuario(id: number){
    // @ts-ignore
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  }

}
