import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  videos: Video[] = [];

  constructor(private appService: VideoService) {
  }

  ngOnInit() {
    this.appService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

}
