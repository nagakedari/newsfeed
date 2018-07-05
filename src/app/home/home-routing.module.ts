import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContentdisplayComponent } from '../common/components/contentdisplay/contentdisplay.component';

const home_routes: Routes = [
{
  path:'',
  component: HomeComponent,
  children: [
    {path:'content', component: ContentdisplayComponent}
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(home_routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
