import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../video';
import { VideoService } from '../video.service';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VideosComponent implements OnInit {

  videos$: Observable<Video[]>;

  constructor(private appService: VideoService) {
  }

  ngOnInit() {
    this.videos$ = this.appService.getVideos();
  }

}
