import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: any[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

}
