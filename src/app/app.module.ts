import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCharactersService } from './search-characters.service';
import { ShowCharactersComponent } from './show-characters/show-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCharactersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [SearchCharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
