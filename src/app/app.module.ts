import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city/city-selector/city-selector.component';
import { FavoritsComponent } from './city/favorits/favorits.component';
import { CommentComponent } from './city/comment/comment.component';
import { CitiesService } from './city/cities.service';
import { CityComponent } from './city/city.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    FavoritsComponent,
    CommentComponent,
    CityComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
