import { Component, OnInit } from '@angular/core';
import { Video } from './model';
import { VideosStore } from './videos.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  videos: Observable<Video[]> = this.videosStore.videos$;

  constructor(private videosStore: VideosStore) {
  }

  ngOnInit() {
    this.videosStore.load();
  }
}
