import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ];

  listUsuarios:Usuario[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private serviceUsuario:UsuarioService,
              private _snackBar: MatSnackBar) {
    
  }
  cargarUsuarios(){
    this.listUsuarios = this.serviceUsuario.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }
  ngOnInit(): void {
    this.cargarUsuarios()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index:number){
    this.serviceUsuario.eliminarUsuario(index);
    this.cargarUsuarios();

    this._snackBar.open('El usuario ha sido eliminado', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
