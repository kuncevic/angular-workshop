import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(
    private httpClient: HttpClient) { }

  getVideos(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/video');
  }

}
