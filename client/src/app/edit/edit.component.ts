import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { VideoService } from '../video.service';
import { VideoModel } from '../video.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  form = this.fb.group({
    title: '',
    likes: '',
    dislikes: '',
  });

  private videoId = this.route.snapshot.params.videoId;
  private video: VideoModel;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoService.getVideo(this.videoId)
      .subscribe(video => {
        this.video = video;
        this.form.patchValue(video);
      });
  }

  submit() {
    const update: Partial<VideoModel> = this.form.value;
    const video: VideoModel = { ...this.video, ...update };
    this.videoService.updateVideo(video).subscribe();
  }
}
