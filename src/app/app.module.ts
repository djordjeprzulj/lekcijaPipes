import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { AsynPipeComponent } from './asyn-pipe/asyn-pipe.component';
import { AsynPipe2Component } from './asyn-pipe2/asyn-pipe2.component';
import { AsynPipe3Component } from './asyn-pipe3/asyn-pipe3.component';
import { AsynPipe4Component } from './asyn-pipe4/asyn-pipe4.component';

@NgModule({
  declarations: [
    AppComponent,
    AsynPipeComponent,
    AsynPipe2Component,
    AsynPipe3Component,
    AsynPipe4Component
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
