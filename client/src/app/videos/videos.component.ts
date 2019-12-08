import { Component, OnInit } from '@angular/core';

import { VideoService } from '../video.service';
import { VideoModel } from '../video.model';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  videos: VideoModel[] = [];

  constructor(private appService: VideoService) {
  }

  ngOnInit() {
    this.appService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

}
