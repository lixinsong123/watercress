import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {indexComponent} from './index/index.component';
import {movieComponent}  from './movie/movie.component';
import {theatresComponent} from "./movie/theatres/theatres.component";
import {newFilmComponent}  from "./movie/newFilm/newFilm.component";
import {bookComponent}     from "./book/book.component";
import {fictionComponent}  from "./book/fiction/fiction.component";
import {testComponent}  from './test/test.component';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {WikipediaService} from './test/test.service';
import {theatresService} from './movie/theatres/theatres.service';

@NgModule({
  declarations: [
    AppComponent,
    indexComponent,
    movieComponent,
    theatresComponent,
    testComponent,
    newFilmComponent,
    bookComponent,
    fictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    JsonpModule
  ],
  providers: [WikipediaService,theatresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
