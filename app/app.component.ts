import { Component } from '@angular/core';

/*
  Definisco la classe Mucca
*/
export class Mucca {
  marchio: number;
  nome: string;
}

/* Non so perchè debba essere "const"
   E' stato inserito qui perchè in futuro utilizzeremo
*/
const array_di_mucche : Mucca[] = [
  { marchio : 5532, nome : "Carolina" },
  { marchio : 1000, nome : "Bambolina"},
  { marchio : 4040, nome : "Lola"},
  { marchio : 1301, nome : "Berta"},
  { marchio : 1301, nome : "Giumentina"},
  { marchio : 4030, nome : "Milka"},
];

@Component({
  selector: 'my-app',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .mucche-list {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .mucche-list li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .mucche-list li.selected {
    left: 1em;
  }
  .mucche-list li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .mucche-list li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: 1em;
  }
  .mucche-list .text {
    position: relative;
    top: -3px;
  }
  .mucche-list .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  template:`
  <h1>{{title}}</h1>

  <pre>
           (__)
  /--------(00)
 / |      |(  )
   ||---- ||()
   ||     ||
   ^^     ^^
  </pre>

  <h2> Le mucche in gara: </h2>
  <ul class="mucche-list">
    <!-- seVieneSelezionata(m) è una funzione che crei tu (vedi sotto)!!-->
    <li *ngFor="let m of mucche"
        (click)="seVieneSelezionata(m)"
        [class.selected]="m === mucca_selezionata">

      <!--The (*) prefix to ngFor indicates that the <li> element and
          its children constitute a master template. -->

      <!-- "prendi ciascuna mucca all'interno dell'array di mucche, salvale
            all'interno di una variabile locale 'm'" -->

      <!-- La keyword "let" identifica 'm' come una variabile input di template.
           Possiamo quindi accedere alle sue proprietà. -->

      <span class="badge">{{m.marchio}}</span> {{m.nome}}
    </li>
  </ul>

  <div *ngIf="mucca_selezionata">
    <h2>I dettagli di mucca {{mucca_selezionata.nome}}:</h2>
    <div><label>Marchio: </label>{{mucca_selezionata.marchio}}</div>
    <div>
      <label>Nome senza ngModel binding: </label>
      <input value={{mucca_selezionata.nome}} placeholder="Nome">
      <br>
      <label>Nome con ngModel two way binding: </label>
      <input [(ngModel)]="mucca_selezionata.nome" placeholder="Nome two way binding">
    </div>
  </div>
  <!-- ngIf and ngFor are called “structural directives” -> vedi MINDOMO! -->
  `
})

export class AppComponent {
  title = 'Una gara di Mucche!';
  mucche = array_di_mucche;

  /* Dico semplicemente che mucca_selezionata è di tipo Mucca */
  mucca_selezionata : Mucca;

  seVieneSelezionata(mucca : Mucca): void {
    this.mucca_selezionata = mucca;
  }
}
