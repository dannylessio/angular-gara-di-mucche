import { Component, Input } from '@angular/core';
import { Mucca } from './mucca';

@Component({
  selector: 'dettagli-mucca',
  template: `
  <div *ngIf="mucca">
    <h2>I dettagli di mucca {{mucca.nome}}:</h2>
    <div><label>Marchio: </label>{{mucca.marchio}}</div>
    <div>
      <label>Nome senza ngModel binding: </label>
      <input value={{mucca.nome}} placeholder="Nome">
      <br>
      <label>Nome con ngModel two way binding: </label>
      <input [(ngModel)]="mucca.nome" placeholder="Nome two way binding">
    </div>
  </div>
  <!-- ngIf and ngFor are called “structural directives” -> vedi MINDOMO! -->
  `,
})

export class MuccaDettagliComponent {
  @Input()
  mucca: Mucca;
}
