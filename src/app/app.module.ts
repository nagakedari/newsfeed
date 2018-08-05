import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CinemaComponent } from './cinema/cinema.component';
import { GossipsComponent } from './gossips/gossips.component';
import { HeaderComponent } from './header/header.component';
import { AppRouterModule } from './app-router/app-router.module';
import { ApiproxyService } from './common/services/apiproxy.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContentdisplayComponent } from './common/components/contentdisplay/contentdisplay.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { SharedService } from './common/services/shared.service';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { JSON } from './common/utility/app-contants';
import { ContentSummaryComponent } from './common/components/content-summary/content-summary.component';
import { ArraySlicePipe } from './common/pipes/array-slice.pipe';
import { SlicePipe } from '@angular/common';
import { JsonPipe } from './common/pipes/json.pipe';
import { create } from 'domain';

export function translateLoader(_http: HttpClient) {
  return new MultiTranslateHttpLoader(_http, [
    { prefix: '', suffix: JSON },
    { prefix: 'header-', suffix: JSON },
    { prefix: 'special-story-', suffix: JSON },
    { prefix: 'top-stories-', suffix: JSON },
    { prefix: 'news-', suffix: JSON },
    { prefix: 'cinema-', suffix: JSON },
    { prefix: 'gossips-', suffix: JSON }
  ]);
}

@Injectable()
export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(private _http: HttpClient, public resources: { prefix: string, suffix: string }[] = [{
    prefix: '',
    suffix: JSON
  }]) { }

  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): any {

    return Observable.forkJoin(this.resources.map(config => {
      let url = 'http://localhost:3000/content?file_name='+`${config.prefix}${lang}${config.suffix}`;
      return this._http.get(url);
    })).map(response => {
      return response.reduce((a, b) => {
        return Object.assign(a, b);
      });
    });
  }
}

export function load_data_json(_sharedService: SharedService) {
  return () => _sharedService._loadDataJson();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    CinemaComponent,
    GossipsComponent,
    HeaderComponent,
    ContentdisplayComponent,
    ContentSummaryComponent,
    ArraySlicePipe,
    JsonPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ApiproxyService, SharedService,
    {
      provide: APP_INITIALIZER,
      useFactory: load_data_json,
      deps: [SharedService],
      multi: true
    }, SlicePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
