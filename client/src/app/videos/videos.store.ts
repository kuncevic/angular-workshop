import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Video } from './model';


@Injectable()
export class VideosStore {

  private videos = new BehaviorSubject([]);
  readonly videos$ = this.videos.asObservable();

  constructor(private http: HttpClient) {
  }

  load(): void {
    this.http.get('http://localhost:3000/video')
      .subscribe((videos: Video[]) => this.videos.next(videos));
  }
}
