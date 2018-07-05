import { Component, OnInit } from '@angular/core';
import { SharedService } from './common/services/shared.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  
  constructor(private _sharedService: SharedService, private _translate: TranslateService){
    this._translate.setDefaultLang('en');
  }

  ngOnInit(){
  }

}
