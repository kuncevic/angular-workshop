import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class VideoComponent implements OnInit {
  videoId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.videoId = this.getVideoId();
  }

  public getVideoId() {
    return this.route.snapshot.params.videoId;
  }

}
