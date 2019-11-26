import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';


@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatGridListModule,
  ]
})
export class VideosModule { }
