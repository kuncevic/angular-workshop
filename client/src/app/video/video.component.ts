import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./video.component.scss'],
  standalone: false
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
