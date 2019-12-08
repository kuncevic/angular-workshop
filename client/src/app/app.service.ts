import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { VideoModel } from './video.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(
    private httpClient: HttpClient) { }

  getVideos(): Observable<VideoModel[]> {
      return this.httpClient.get(`${environment.apiUrl}/video`)
        .pipe(map((data: any[]) => {
          return data.map(x => {
            const video: VideoModel = {
              id: x.id,
              title: x.title,
              likes: x.likes,
              dislikes: x.dislikes,
              views: x.views,
            };
            return video;
          });
        }));
  }

}
