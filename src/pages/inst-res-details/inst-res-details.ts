import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-inst-res-details',
  templateUrl: 'inst-res-details.html',
})
export class InstResDetailsPage {
  selectedInResource: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedInResource = navParams.get('inResource');
  }

}
