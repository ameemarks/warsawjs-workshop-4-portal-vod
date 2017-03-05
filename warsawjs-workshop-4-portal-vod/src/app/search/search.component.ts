import { Component, OnInit } from '@angular/core';
import { VideoListComponent } from '../video-list/video-list.component';
import { LatestVideoService } from "../video-list/latest-video.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [LatestVideoService]
})

export class SearchComponent implements OnInit {
  videos: any[] = [];
  constructor(private latestVideoService: LatestVideoService) { }

  ngOnInit() {
  }

  search (phrase) {
    if (!phrase) {
      return;
    }
    this.latestVideoService.searchVideosByTitle(phrase)
      .then((videos) => {
        this.videos = videos
      })
  }

}
