import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Video } from '../video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Video[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

}
