import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacDetailsPage } from '../fac-details/fac-details';

@Component({
  selector: 'page-faculty',
  templateUrl: 'faculty.html',
})
export class FacultyPage {
  letters: string[];
  names: string[];
  depts: string[];
  offices: string[];
  exts: number[];
  emails: string[];
  staffs: Array<{letter: string, name: string, dept: string, office: string, ext: number, email: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.letters = ['A', 'B', 'C'];
    this.names = ['Name 1', 'Name 2', 'Name 3'];
    this.depts = ['Department 1', 'Department 2', 'Department 3'];
    this.offices = ['Office Room 1', 'Office Room 2', 'Office Room 3'];
    this.exts = [11111, 22222, 33333];
    this.emails = ['name1@email.com', 'name2@email.com', 'name3@gmail.com'];

    this.staffs = [];
    for (let i = 0; i < 3; i++){
      this.staffs.push({
        letter: this.letters[i],
        name: this.names[i],
        dept: this.depts[i],
        office: this.offices[i],
        ext: this.exts[i],
        email: this.emails[i]
      });
    }
  }

  seeStaffDetails(event, staff){
    this.navCtrl.push(FacDetailsPage, {
      staff: staff
    });
  }

}
