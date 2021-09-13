import {Component, Input, Output, EventEmitter, Host} from '@angular/core';
import {AppComponent} from "../app.component";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  //recibo la data de los usuarios por el Input
  @Input('data') user:any
  // envio al padre el id para eliminar
  @Output() borrar = new EventEmitter<number>()

  constructor(
     // con este decorador podemos acceder a todas las propiedades del padre
    @Host() private _app: AppComponent
  ) {

    console.log(this._app);

  }

  BorrarUsuarios(id: number){
    this.borrar.emit(id)
  }

  BorrarUsuario(id: number){
    //entramos a la propiedad usuarios desde el hijo para poder realizar el filtro
    // @ts-ignore
    this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id)
  }
}
