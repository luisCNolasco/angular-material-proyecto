import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {
      usuario: 'usuario1',
      nombre: 'Luis',
      apellido: 'Carranza',
      sexo: 'Masculino',
    },
    {
      usuario: 'usuario2',
      nombre: 'María',
      apellido: 'Paredes',
      sexo: 'Femenino',
    },
    {
      usuario: 'usuario3',
      nombre: 'Robert',
      apellido: 'Díaz',
      sexo: 'Masculino',
    },
    {
      usuario: 'usuario4',
      nombre: 'Adriana',
      apellido: 'Mendoza',
      sexo: 'Femenino',
    },
    {
      usuario: 'usuario5',
      nombre: 'Raquel',
      apellido: 'Rodriguez',
      sexo: 'Femenino',
    }
  ];
  constructor() { }
  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(usuario:Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
