import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './you-tube/video/video.component';
import { VideosComponent } from './you-tube/videos/videos.component';
import { EditComponent } from './you-tube/edit/edit.component';


const routes: Routes = [
  { path: '', component: VideosComponent },
  { path: 'video/:videoId', component: VideoComponent },
  { path: 'edit/:videoId', component: EditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
