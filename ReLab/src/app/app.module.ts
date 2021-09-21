import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAdCfqkTAmyXPnnLVhShaL9RPIt_XlVRF4'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
