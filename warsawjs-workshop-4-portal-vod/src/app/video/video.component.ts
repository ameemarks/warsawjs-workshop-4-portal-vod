import { Component, OnInit, Input } from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap'

//function Timeout (time = 1000) {
//  return function (target, key, descriptor) {
//    //descriptor - instance
//    // key - 'test'
//    // value - enumerable, configurable, writable, value
//
//    let old = descriptor.value;     //funkcja test2
//    descriptor.value = function () {
//        setTimeout(function () {
//          old();
//        }, time)
//    }
//  };
//}

//function Print () {
//  return function (target, key, descriptor) {
//    let old = descriptor.value;
//    descriptor.value = function () {
//      console.log(old());
//    }
//  }
//}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [LatestVideoService]
})

export class VideoComponent implements OnInit {
  video:any;

  constructor(private latestVideoService:LatestVideoService,
              private route:ActivatedRoute,
              private router: Router) {
    //this.getName();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params:Params) => {
        return this.latestVideoService.getVideo(params['id']);
      })
      .subscribe((video) => {
        if (!video) {
          return this.router.navigate(['video-not-found']);
        }
        this.video = video
      })
  }


  //test () {
  //  console.log('test');
  //}
  //
  //@Print()
  //getName () {
  //  return 'Anna';
  //}
}
