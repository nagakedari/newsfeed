import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/services/shared.service';
import { Router } from '@angular/router';
import { CONTENT, SLASH } from '../common/utility/app-contants';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any[];

  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit() {
    this.news = this._sharedService.news;
  }
}
