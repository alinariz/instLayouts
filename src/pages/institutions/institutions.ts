import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { OcadprofilePage } from '../ocadprofile/ocadprofile';
import { RyersonprofilePage } from '../ryersonprofile/ryersonprofile';
import { YorkprofilePage } from '../yorkprofile/yorkprofile';

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

  goToEditPage() {
    this.navCtrl.push(EditPage);
  }

}
