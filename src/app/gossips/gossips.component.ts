import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../common/services/shared.service';
import { CONTENT, SLASH } from '../common/utility/app-contants';

@Component({
  selector: 'app-gossips',
  templateUrl: './gossips.component.html',
  styleUrls: ['./gossips.component.scss']
})
export class GossipsComponent implements OnInit {
  gossips: any[];
  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit() {
    this.gossips = this._sharedService.gossips;
  }
}
