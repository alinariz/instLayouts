import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fac-details',
  templateUrl: 'fac-details.html',
})
export class FacDetailsPage {
  selectedStaff: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedStaff = navParams.get('staff');
  }


}
