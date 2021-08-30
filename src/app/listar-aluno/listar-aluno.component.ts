/* Gabriel Munhoz Bonni SC3005429 */
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  alunoInfo : Aluno = {
    nome: "Gabriel Munhoz Bonni",
    dataIngresso: "01/02/2019",
    previsaoFormatura: "01/07/2022"
  }

  constructor() { }

  ngOnInit(): void {
  }
}