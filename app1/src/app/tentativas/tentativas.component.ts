import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string;
  public coracaoCheio: string;

  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() {
    this.coracaoVazio = '/assets/coracao_vazio.png';
    this.coracaoCheio = '/assets/coracao_cheio.png';
    console.log(this.coracoes);
  }

  ngOnInit() {
  }

}
