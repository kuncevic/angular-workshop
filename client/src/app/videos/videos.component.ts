import { Component, OnInit } from '@angular/core';
import { Video } from './model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  videos: Video[] = [
    {
      "id": "NeQM1c-XCDc",
      "title": "Rammstein - Deutschland (Official Video)",
      "views": "88123123",
      "likes": "22543345",
      "dislikes": "75123",
    },
    {
      "id": "pat2c33sbog",
      "title": "Rammstein - Ausländer (Official Video)",
      "views": "30123443",
      "likes": "7094532",
      "dislikes": "19542",
    },
    {
      "id": "hiOjK992bPU",
      "title": "LINDEMANN - Steh auf (Official Video)",
      "views": "8812123",
      "likes": "219234",
      "dislikes": "4389",
    },
    {
      "id": "NeQM1c-XCDc",
      "title": "Rammstein - Deutschland (Official Video)",
      "views": "88123123",
      "likes": "22543345",
      "dislikes": "75123",
    },
    {
      "id": "pat2c33sbog",
      "title": "Rammstein - Ausländer (Official Video)",
      "views": "30123443",
      "likes": "7094532",
      "dislikes": "19542",
    },
    {
      "id": "hiOjK992bPU",
      "title": "LINDEMANN - Steh auf (Official Video)",
      "views": "8812123",
      "likes": "219234",
      "dislikes": "4389",
    },
    {
      "id": "NeQM1c-XCDc",
      "title": "Rammstein - Deutschland (Official Video)",
      "views": "88123123",
      "likes": "22543345",
      "dislikes": "75123",
    },
    {
      "id": "pat2c33sbog",
      "title": "Rammstein - Ausländer (Official Video)",
      "views": "30123443",
      "likes": "7094532",
      "dislikes": "19542",
    },
    {
      "id": "hiOjK992bPU",
      "title": "LINDEMANN - Steh auf (Official Video)",
      "views": "8812123",
      "likes": "219234",
      "dislikes": "4389",
    },
    {
      "id": "NeQM1c-XCDc",
      "title": "Rammstein - Deutschland (Official Video)",
      "views": "88123123",
      "likes": "22543345",
      "dislikes": "75123",
    },
    {
      "id": "pat2c33sbog",
      "title": "Rammstein - Ausländer (Official Video)",
      "views": "30123443",
      "likes": "7094532",
      "dislikes": "19542",
    },
    {
      "id": "hiOjK992bPU",
      "title": "LINDEMANN - Steh auf (Official Video)",
      "views": "8812123",
      "likes": "219234",
      "dislikes": "4389",
    },
    {
      "id": "NeQM1c-XCDc",
      "title": "Rammstein - Deutschland (Official Video)",
      "views": "88123123",
      "likes": "22543345",
      "dislikes": "75123",
    },
    {
      "id": "pat2c33sbog",
      "title": "Rammstein - Ausländer (Official Video)",
      "views": "30123443",
      "likes": "7094532",
      "dislikes": "19542",
    },
    {
      "id": "hiOjK992bPU",
      "title": "LINDEMANN - Steh auf (Official Video)",
      "views": "8812123",
      "likes": "219234",
      "dislikes": "4389",
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
