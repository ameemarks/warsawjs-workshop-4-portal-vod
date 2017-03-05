import { Component, OnInit } from '@angular/core';
import { VideoListComponent} from '../video-list/video-list.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  videos: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  search (phrase) {
    console.log(phrase);
  }

}
