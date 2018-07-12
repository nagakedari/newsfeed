import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { BUCKET, S3_BUCKET_NAME, S3_FLODER, REGION, IDENTITY_POOL_ID } from '../utility/app-contants';

@Injectable()
export class AwsService {

  constructor() { }

  private getS3Bucket(): any {
    return BUCKET;
  }  

  public loadContent(): Observable<any> {
    AWS.config.update({
      region: REGION,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IDENTITY_POOL_ID
      })
    });
    const params = {
      Bucket: S3_BUCKET_NAME,
      Prefix: S3_FLODER
    };

    let s3 = new S3({
      apiVersion:"",
      params: params
    });

    s3.listObjects(params, (err, data) => {
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
