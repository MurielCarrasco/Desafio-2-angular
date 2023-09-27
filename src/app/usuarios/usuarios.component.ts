import { Component } from '@angular/core';

interface alumno {
  id: number;
  nombre: string;
  apellido: string;
  carrera: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  alumnos : alumno[] = [
    {id: 1, nombre: 'Maria', apellido:'Lopez', carrera:'HTML'}, 
    {id: 2, nombre: 'Rodolfo', apellido:'Saavedra', carrera:'CSS'}, 
    {id: 3, nombre: 'Lorena', apellido:'Cornejo', carrera:'CSS'}, 
    {id: 4, nombre: 'Rodrigo', apellido:'saez', carrera:'HTML'}, 
    {id: 5, nombre: 'Carolina', apellido:'Peralta', carrera:'HTML'}, 
    {id: 6, nombre: 'Ariel', apellido:'Tapia', carrera:'CSS'},
   ]

}
