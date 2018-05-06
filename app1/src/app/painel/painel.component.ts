import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

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

  public tentativas: number;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.rodada = 0;
    this.progresso = 0;
    this.tentativas = 3;
    this.resposta = '';
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    // trocar a pergunta da rodada
    if (this.rodadaFrase.frasePtBr.toUpperCase() === this.resposta.toUpperCase()) {
      this.rodada++;

      this.progresso += (100 / this.frases.length);

      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit('vitória');
      }
      this.atualizaRodada();

      this.resposta = '';
    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
