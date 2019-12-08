import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoId = this.route.snapshot.params.videoId;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.videoId = this.getVideoId();
    console.log(this.videoId);
    const tag = this.createIframe();
    document.body.appendChild(tag);
  }
  
  public getVideoId() {
    return this.route.snapshot.params.videoId;
  }
  
  public createIframe() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    
    return tag;
  }

}
