import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  { path: '', component: VideosComponent },
  { path: 'video/:videoId', component: VideoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
