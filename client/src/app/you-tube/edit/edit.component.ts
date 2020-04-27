import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Video } from "../video";
import { VideoService } from "../video.service";


@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  form = this.fb.group({
    title: "",
    likes: "",
    dislikes: ""
  });

  private videoId: string;
  private video: Video;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.videoId = this.getVideoId();
    this.videoService.getVideo(this.videoId).subscribe(video => {
      this.video = video;
      this.form.patchValue(video);
    });
  }

  submit() {
    if(confirm('Are you sure?')) {
      const update: Partial<Video> = this.form.value;
      const video: Video = { ...this.video, ...update };
      this.videoService.updateVideo(video).subscribe();
    }
  }

  public getVideoId() {
    return this.route.snapshot.params.videoId;
  }
}
