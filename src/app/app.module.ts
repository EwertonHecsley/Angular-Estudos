import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuNome } from '../app/components/meuNome.component'
import { Segundo } from './components/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuNome,
    Segundo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
