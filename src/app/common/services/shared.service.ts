import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiproxyService } from './apiproxy.service';
import { TOP_STORIES_JSON, SPECIAL_STORY_JSON, HEADERS_JSON, LANGUAGES_JSON, NEWS_JSON, CINEMA_JSON, GOSSIPS_JSON } from '../utility/app-contants';

@Injectable()
export class SharedService {
  top_stories: any;
  special_story: any;
  headers: any;
  languages: any[];
  news: any[];
  cinema: any[];
  gossips: any[];

  constructor(private _apiproxy: ApiproxyService) { }

  public _loadDataJson() {
    let promises: Promise<any>[] = [];

    let topStoriesPromise = new Promise((resolve, reject) => {
      this._apiproxy.get(TOP_STORIES_JSON).subscribe(result => {
        this.top_stories = result;
        resolve(true);
      });
    });
    promises.push(topStoriesPromise);
    let specialStoryPromise = new Promise((resolve, reject) => {
      this._apiproxy.get(SPECIAL_STORY_JSON).subscribe(result => {
        this.special_story = result;
        resolve(true);
      });
    });
    promises.push(specialStoryPromise);
    let headerPromise = new Promise((resolve, reject) => {
      this._apiproxy.get(HEADERS_JSON).subscribe(result => {
        this.headers = result;
        resolve(true);
      });
    });
    promises.push(headerPromise);

    let languagesPromise = new Promise((resolve, reject) => {
      this._apiproxy.get(LANGUAGES_JSON).subscribe(result => {
        this.languages = result;
        resolve(true);
      });
    });
    promises.push(languagesPromise);

    let newsPromise = new Promise((resolve, reject) => {
      this._apiproxy.get(NEWS_JSON).subscribe(result => {
        this.news = result;
        resolve(true);
      });
    });
    promises.push(newsPromise);

    let cinemaPromise = new Promise((resolve, reject) => {
      this._apiproxy.get(CINEMA_JSON).subscribe(result => {
        this.cinema = result;
        resolve(true);
      });
    });
    promises.push(cinemaPromise);

    let gossipsPromise = new Promise((resolve, reject) => {
      this._apiproxy.get(GOSSIPS_JSON).subscribe(result => {
        this.gossips = result;
        resolve(true);
      });
    });
    promises.push(gossipsPromise);

    return new Promise((resolve) => {
      Promise.all(promises).then(() => {
        resolve(true);
      });
    });
  }
}
