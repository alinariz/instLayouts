import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OcadprofilePage } from '../ocadprofile/ocadprofile';
import { RyersonprofilePage } from '../ryersonprofile/ryersonprofile';
import { YorkprofilePage } from '../yorkprofile/yorkprofile';
// import { InstitutionProfilePage } from '../institution-profile/institution-profile';

@Component({
  selector: 'page-institutions',
  templateUrl: 'institutions.html'
})
export class InstitutionsPage {
  insts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();

  }

  initializeItems() {
    this.insts = [
      { instPage: OcadprofilePage, instName: 'OCAD University', instLogo: '/assets/imgs/ocadlogo.png' },
      { instPage: RyersonprofilePage, instName: 'Ryerson University', instLogo: '/assets/imgs/ryersonlogo.png' },
      { instPage: YorkprofilePage, instName: 'York University', instLogo: '/assets/imgs/yorklogo.png' }
    ]
  }

  searchInstitutes(event) {
    this.initializeItems();

    var val = event.target.value;

    if (val && val.trim() != '') {
      this.insts = this.insts.filter((inst) => {
        return (inst.instName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToInstProfile(inst: any) {
    this.navCtrl.push(inst.instPage);
  }

  // This function populates InstitutionProfilePage with data from Parse/Firebase
  // about the selected institute; replaces goToInstProfile function
  // goToInstPage(event, institute) {
  //   this.navCtrl.push(InstitutionProfilePage, {
  //     institute : institute
  //   });
  // }

}
