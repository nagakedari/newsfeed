import { Component, OnInit, HostBinding } from '@angular/core';
import { SharedService } from '../common/services/shared.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headers: any[];
  defaultLang: any;
  languages: any[];
  isCollapsed: boolean;
  _selectedLang: string;

  constructor(private _sharedService: SharedService, private _translate: TranslateService){
    this.isCollapsed = true;
    this._translate.addLangs(['en','te']);
    this._translate.setDefaultLang('en');
    const browserLang = this._translate.getBrowserLang();
    this._translate.use(browserLang.match(/en|te/)? browserLang : 'en');
    // this._selectedLang = browserLang.match(/en|te/)? browserLang : 'en';
  } 

  ngOnInit() {
    this.headers = this._sharedService.headers;
    this.languages = this._sharedService.languages;
  }

  @HostBinding('class.te')
 get teClass() {
  // const browserLang = this._translate.getBrowserLang();
   return this._selectedLang === 'te';
 }

  
  changeLang(lang: string) {
    this._translate.use(lang);
    this._selectedLang = lang
  }
}
