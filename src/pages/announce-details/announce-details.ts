import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-announce-details',
  templateUrl: 'announce-details.html',
})
export class AnnounceDetailsPage {
  selectedArticle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedArticle = navParams.get('announcement');
  }

}
