import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InstResDetailsPage } from '../inst-res-details/inst-res-details';

@Component({
  selector: 'page-inst-res',
  templateUrl: 'inst-res.html',
})
export class InstResPage {
  categories: string[];
  titles: string[];
  contents: string[];
  inResources: Array<{ category: string, title: string, content: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories = ['Category 1', 'Category 2', 'Category 3'];
    this.titles = ['Resource Title 1', 'Resource Title 2', 'Resource Title 3'];
    this.contents = ['Contents of Resource 1', 'Contents of Resource 2', 'Contents of Resource 3'];

    this.inResources = [];
    for (let i = 0; i < 3; i++) {
      this.inResources.push({
        category: this.categories[i],
        title: this.titles[i],
        content: this.contents[i]
      });
    }
  }

  seeInResource(event, inResource) {
    this.navCtrl.push(InstResDetailsPage, {
      inResource: inResource
    });
  }

}
