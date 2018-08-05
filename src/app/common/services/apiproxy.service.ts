import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiproxyService {
  url = environment.api_data_base_url;

  constructor(private http: HttpClient) { }

  public get(data_json: string) : Observable<any[]> {
    return this.http.get<any[]>(this.url+data_json);
  }

  public getFileFromS3(url: string) : Observable<any[]> {
    return this.http.get<any[]>(url);
  }

}
