import { Component, OnInit } from '@angular/core';
import { ApiproxyService } from '../common/services/apiproxy.service';
import { Router} from '@angular/router';
import { SharedService } from '../common/services/shared.service';
import { CONTENT } from '../common/utility/app-contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: string;
  top_stories: any[];
  special_story: any;
  news: any[];
  cinema: any[];
  gossips: any[];

  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit() {
   this.top_stories = this._sharedService.top_stories;
   this.special_story = this._sharedService.special_story[0];
   this.news = this._sharedService.news;
   this.cinema = this._sharedService.cinema;
   this.gossips = this._sharedService.gossips;
  }

}
