import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./videos.component.scss'],
  standalone: false
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
