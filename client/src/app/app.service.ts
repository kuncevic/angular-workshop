import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Video } from './video';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(`${environment.apiUrl}/video`);
  }

  //#region examples of other possible HTTP calls
  /**
   * You can try to consume them within an app the same way we are consuming getVideos()
  */

 getVideo(id: string): Observable<Video> {
    return this.httpClient.get<Video>(`${environment.apiUrl}/video/${id}`);
  }

 updateVideo(video: Partial<Video>): Observable<Video> {
    return this.httpClient.put<Video>(`${environment.apiUrl}/video/${video.id}`, video);
  }

  getVideoIds(): Observable<string[]> {
    return this.httpClient.get<Video[]>(`${environment.apiUrl}/video`)
      .pipe(map((data: any[]) => {
        return data.map(x => x.id);
      }));
  }

  getVideosErrorChecked(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(`${environment.apiUrl}/video`)
      .pipe(
        retry(3),
        catchError((error: any, caught: Observable<Video[]>) => {
          console.log(error);
          return caught;
        })
      );
  }

  getWithParams(param1: number, param2: string): Observable<Video[]> {
    const params = new HttpParams();
    params.set('param1', param1.toString());
    params.set('param2', param2);

    return this.httpClient.get<Video[]>(`${environment.apiUrl}/video`, { params });
  }

  //#endregion
}
