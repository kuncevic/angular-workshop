import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoModel } from '../video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoId: VideoModel;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.videoId = this.getVideoId();
  }

  public getVideoId() {
    return this.route.snapshot.params.videoId;
  }

}
