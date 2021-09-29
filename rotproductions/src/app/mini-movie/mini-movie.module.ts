import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniMovieComponent } from './mini-movie.component';
import { WatchButtonComponent } from './watch-button/watch-button.component';
import { QuizletComponent } from './quizlet/quizlet.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    MiniMovieComponent,
    WatchButtonComponent,
    QuizletComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiniMovieComponent
  ]
})
export class MiniMovieModule { }
