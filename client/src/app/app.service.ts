import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { environment } from '../environments/environment';
import { VideoModel } from './video.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getVideos(): Observable<VideoModel[]> {
      return this.httpClient.get<VideoModel[]>(`${environment.apiUrl}/video`);
  }

  getVideoIds(): Observable<string[]> {
    return this.httpClient.get<VideoModel[]>(`${environment.apiUrl}/video`)
      .pipe(map((data: any[]) => {
        return data.map(x => x.id);
      }));
  }

  getVideosErrorChecked(): Observable<VideoModel[]> {
    return this.httpClient.get<VideoModel[]>(`${environment.apiUrl}/video`)
      .pipe(
        retry(3),
        catchError((error: any, caught: Observable<VideoModel[]>) => {
          console.log(error);
          return caught;
        })
      );
  }

  getVideoById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/video/${id}`);
  }

  getWithParams(param1: number, param2: string): Observable<any> {
    const params = new HttpParams();
    params.set('param1', param1.toString());
    params.set('param2', param2);

    return this.httpClient.get<VideoModel[]>(`${environment.apiUrl}/video`, { params });
  }

  post(data: any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/video`, data);
  }
}