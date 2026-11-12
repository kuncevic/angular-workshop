import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
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
