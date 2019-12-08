import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private videos = [
    {
      "id": "NeQM1c-XCDc",
      "title": "Rammstein - Deutschland (Official Video)",
      "views": "88123123",
      "likes": "22543345",
      "dislikes": "75123"
    },
    {
      "id": "pat2c33sbog",
      "title": "Rammstein - Ausländer (Official Video)",
      "views": "30123443",
      "likes": "7094532",
      "dislikes": "19542"
    }
  ];

  constructor() { }

  getVideos() {
    return this.videos;
  }

}