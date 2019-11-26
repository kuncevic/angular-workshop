import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [VideosComponent, PreviewComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class VideosModule { }
