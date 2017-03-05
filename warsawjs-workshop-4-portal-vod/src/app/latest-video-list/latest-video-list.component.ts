import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-video-list',
  templateUrl: './latest-video-list.component.html',
  styleUrls: ['./latest-video-list.component.css']
})
export class LatestVideoListComponent implements OnInit {
  videos: any [] = [];
  constructor() { }

  ngOnInit() {
  }

}
