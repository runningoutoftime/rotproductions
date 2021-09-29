import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MiniMovieComponent } from './mini-movie/mini-movie.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mini-movies',
    component: MiniMovieComponent
  },
  { path: 'contact', component: ContactComponent }
  // { path: '**', component: BadPathComponent } this can be used to render at any wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
