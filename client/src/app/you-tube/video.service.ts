import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { VideoModel } from './video.model';


@Injectable({ providedIn: 'root' })
export class VideoService {

  constructor(
    private httpClient: HttpClient) {
  }

  getVideos(): Observable<VideoModel[]> {
    return this.httpClient.get<VideoModel[]>(`${environment.apiUrl}/video`);
  }

  getVideo(id: string): Observable<VideoModel> {
    return this.httpClient.get<VideoModel>(`${environment.apiUrl}/video/${id}`);
  }

  updateVideo(video: Partial<VideoModel>): Observable<VideoModel> {
    return this.httpClient.put<VideoModel>(`${environment.apiUrl}/video/${video.id}`, video);
  }
}
