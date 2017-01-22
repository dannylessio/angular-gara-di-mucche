import { Mucca } from './mucca';

/*
   Da notare 'export' il che permette di importare array_di_mucche da qualunque
   parte. A noi serve all'interno di MuccaService all'interno di
   mucca.service.ts
*/

export const array_di_mucche : Mucca[] = [
  { marchio : 5532, nome : "Carolina" },
  { marchio : 1000, nome : "Bambolina"},
  { marchio : 4040, nome : "Lola"},
  { marchio : 1301, nome : "Berta"},
  { marchio : 1301, nome : "Giumentina"},
  { marchio : 4030, nome : "Milka"},
];
