import { Component, OnInit } from '@angular/core';

import { Frase } from './../shared/frase.model';
import { frases } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = frases;
  public instrucao: String = 'Traduza a frase:';
  public resposta: String;

  public rodada: number;
  public rodadaFrase: Frase;

  public progresso: number;

  constructor() {
    this.rodada = 0;
    this.progresso = 0;
    this.resposta = '';
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {

    // trocar a pergunta da rodada
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;

      this.progresso += (100 / this.frases.length);
      console.log(this.progresso);

      this.atualizaRodada();
      alert('A tradução está correta');

      this.resposta = '';
    } else {
      alert('A tradução está errada');
    }

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }
}
