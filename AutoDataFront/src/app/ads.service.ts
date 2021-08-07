import { Injectable } from '@angular/core';
import {Ad} from './models';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private client: HttpClient) { }
  getAds(): Observable<any> {
    return this.client.get<Ad[]>(`http://127.0.0.1:8000/api/list/`);
  }
}
