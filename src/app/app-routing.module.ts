
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {indexComponent} from './index/index.component';
import {testComponent}  from './test/test.component';
import {theatresComponent} from "./movie/theatres/theatres.component";
import {movieComponent}  from './movie/movie.component';
import {newFilmComponent}  from "./movie/newFilm/newFilm.component";
import {bookComponent}     from "./book/book.component";
import {fictionComponent}  from "./book/fiction/fiction.component";
  
const appRoutes: Routes = [
  //首页
  { path: 'index', component: indexComponent },
  //电影
   { path: 'movie', component: movieComponent },
  //影院热映Theatres
   { path: 'movie/theatres', component: theatresComponent },
  //新片速递
   { path: 'movie/newFilm', component: newFilmComponent },
  //图书
   { path: 'book', component: bookComponent },
  //最受欢迎图书--》虚构类
  { path: 'book/fiction', component: fictionComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: 'test', component: testComponent },
  { path: '**', component: indexComponent }
];


@NgModule({
  //本模块声明的组件模版需要的类所在的其他模块
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[RouterModule]

})
export class AppRoutingModule{}