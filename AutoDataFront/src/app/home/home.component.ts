import { Component, OnInit } from '@angular/core';
import {Ad} from '../models';
import {AdsService} from '../ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ads: Ad[] | undefined;
  constructor( private adsService: AdsService) { }

  ngOnInit(): void {
    this.getAds();
  }
  getAds(): void {
    this.adsService.getAds().subscribe( ads => {
      this.ads = ads;
    });
  }

}
