import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BUCKET, S3_BUCKET_NAME, S3_FLODER } from '../utility/app-contants';

@Injectable()
export class AwsService {

  constructor() { }

  private getS3Bucket(): any {
    return BUCKET;
  }  

  public loadContent(): Observable<any> {
    const params = {
      Bucket: S3_BUCKET_NAME,
      Prefix: S3_FLODER
    }
    this.getS3Bucket().listObjects(params, (err, data) => {
      if(err) {
        console.log('There was an error loading content');
        return;
      }
      const fileDatas = data.Contents;
 
      fileDatas.forEach(file => {
        console.log(file);
      });
    });

    return Observable.of();
  }
}
