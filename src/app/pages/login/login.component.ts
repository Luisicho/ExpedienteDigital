import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:usuarioModel = new usuarioModel();

  constructor() { }

  ngOnInit(): void {
  }

}
