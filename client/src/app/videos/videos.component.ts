import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Video } from '../video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos$: Observable<Video[]>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.videos$ = this.appService.getVideos();
  }

}
