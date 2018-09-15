import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThemeSettingsProvider } from './../../providers/theme-settings/theme-settings';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  selectedPrimaryColor: String;
  selectedSecondaryColor: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private primColor: ThemeSettingsProvider, private secColor: ThemeSettingsProvider) {
    this.primColor.getPrimaryActive().subscribe(val => this.selectedPrimaryColor = val);
    this.secColor.getSecondaryActive().subscribe(val => this.selectedSecondaryColor = val);
  }

  setPrimaryRed(){
    this.primColor.setPrimaryActive('primaryRed');
  }
  setPrimaryBlue(){
    this.primColor.setPrimaryActive('primaryBlue');
  }
  setPrimaryGold(){
    this.primColor.setPrimaryActive('primaryGold');
  }
  setPrimaryGrey(){
    this.primColor.setPrimaryActive('primaryGrey');
  }
  setPrimaryWhite(){
    this.primColor.setPrimaryActive('primaryWhite');
  }
  setSecondaryRed(){
    this.primColor.setPrimaryActive('secondaryRed');
  }
  setSecondaryBlue(){
    this.primColor.setPrimaryActive('secondaryBlue');
  }
  setSecondaryGold(){
    this.primColor.setPrimaryActive('secondaryGold');
  }
  setSecondaryGrey(){
    this.primColor.setPrimaryActive('secondaryGrey');
  }
  setSecondaryWhite(){
    this.primColor.setPrimaryActive('secondaryWhite');
  }

}