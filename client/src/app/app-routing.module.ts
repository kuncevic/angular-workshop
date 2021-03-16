import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', component: VideosComponent },
  { path: 'video/:videoId', component: VideoComponent },
  { path: 'edit/:videoId', component: EditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
