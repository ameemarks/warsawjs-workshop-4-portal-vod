import { Injectable } from '@angular/core';
import {VIDEOS} from './mock-videos'
import {RegExp} from "../../../../../../webstorm/WebStorm-143.382.36/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";

@Injectable()
export class LatestVideoService {

  constructor() {
    VIDEOS;
  }

  //docelowo komunikuje się z backendem, dostarcza danych
  getVideos(): Promise<any[]> {
    return new Promise ((resolve) => {
      setTimeout(function() {
        resolve(VIDEOS)
      }, 1000);
    })
  }

  getVideo (id: string) {
    return this.getVideos()
      .then((videos)=> {
        return videos.find(function (video) {
          return video.id == id;
        });
      })
  }

  searchVideosByTitle(phrase: string): Promise<Video[]> {
    return this.getVideos()
    .then((videos) => {
      return videos.filter(function (video) {
        return video.name.toLowerCase().includes(phrase.toLocaleLowerCase());
      })
    })

  }


}
