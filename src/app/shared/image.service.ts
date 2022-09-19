import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = '&per_page=12';
  private minHeight = '&min_height=200';
  pagePhoto: any;

  constructor(private _http: HttpClient) {}

  getImage(query: string) {
    return this._http.get(this.URL + query + this.perPage + this.minHeight);
  }
}
