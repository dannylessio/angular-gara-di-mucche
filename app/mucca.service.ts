import { Injectable } from '@angular/core';
import { Mucca } from './mucca';
import { array_di_mucche } from './mock-mucche';

@Injectable()
export class MuccaService {

  /* Caso sincrono */

  /* MuccaService potrebbe prendere i dati da qualinque parte, es: webservice
  oppure o da uno storage locale o da un finto storage. All'utilizzatore non
  interessa. */
  /*
  getMucche(): Mucca[] {
    return array_di_mucche;
  } // stub
  /*

  /* Caso asincrono */

  /* Questo metodo è essenzialmente una "Promessa" asincrona, la quale ci
  restituirà i dati non appena disponibili senza bloccare la UI. */
  /* Stiamo simulando una condizione nella quale array_di_mucche viene prelevato
  da un server ultra veloce, con zero latenza, in grado di restituire una
  Promise immediatamente, restituiendoci array_di_mucche immediatamente. */
  getMucche(): Promise<Mucca[]> {
    return Promise.resolve(array_di_mucche);
  }

  /* Simulate a two-seconds server latency  */
  getMuccheSlowly(): Promise<Mucca[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMucche()), 2000);
    });
  }
}
