import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Video } from './video';



@Injectable({ providedIn: 'root' })
export class VideoService {

  constructor(
    private httpClient: HttpClient) {
  }

  getVideos(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(`${environment.apiUrl}/video`);
  }

  getVideo(id: string): Observable<Video> {
    return this.httpClient.get<Video>(`${environment.apiUrl}/video/${id}`);
  }

  updateVideo(video: Partial<Video>): Observable<Video> {
    return this.httpClient.put<Video>(`${environment.apiUrl}/video/${video.id}`, video);
  }
}
