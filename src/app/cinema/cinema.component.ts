import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../common/services/shared.service';
import { CONTENT } from '../common/utility/app-contants';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  cinema: any[];
  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit() {
    this.cinema = this._sharedService.cinema;
  }
}
