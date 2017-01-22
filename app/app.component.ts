import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Mucca } from './mucca';
import { MuccaService } from './mucca.service'

@Component({
  selector: 'my-app',
  providers: [MuccaService],
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

  <!-- Sfrutto un componente separato per la descrizione della mucca -->
  <dettagli-mucca [mucca]="mucca_selezionata"></dettagli-mucca>
  `
})

export class AppComponent implements OnInit {

  private title : string = "Una gara di Mucche!";
  private mucche : Mucca[];
  private mucca_selezionata : Mucca;

  constructor(private muccaService : MuccaService) {}

  getMucche() : void {
    this.muccaService.getMucche().then(mucche => this.mucche = mucche);
  }

  getMuccheSlowly() : void {
    this.muccaService.getMuccheSlowly().then(mucche => this.mucche = mucche);
  }

  seVieneSelezionata(mucca : Mucca): void {
    this.mucca_selezionata = mucca;
  }

  ngOnInit(): void {
    //this.getMucche();
    this.getMuccheSlowly();
  }
}
