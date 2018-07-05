import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NewsComponent } from '../news/news.component';
import { CinemaComponent } from '../cinema/cinema.component';
import { GossipsComponent } from '../gossips/gossips.component';
import { AppComponent } from '../app.component';
import { ContentdisplayComponent } from '../common/components/contentdisplay/contentdisplay.component';
import { NO_PATH, HOME_PATH, NEWS_PATH, CINEMA_PATH, GOSSIPS_PATH, CONTENT_PATH } from '../common/utility/app-contants';

const appRoutes : Routes = [
  {path: NO_PATH, component: HomeComponent, pathMatch: 'full' },
  {path: HOME_PATH, component: HomeComponent},
  {path: NEWS_PATH, component: NewsComponent},
  {path: CINEMA_PATH, component: CinemaComponent},
  {path: GOSSIPS_PATH, component: GossipsComponent},
  {path: CONTENT_PATH, component: ContentdisplayComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
