import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { MuccaDettagliComponent } from './mucca-dettagli.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    MuccaDettagliComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
