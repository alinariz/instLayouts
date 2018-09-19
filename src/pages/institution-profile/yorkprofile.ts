import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InstResPage } from '../inst-res/inst-res';
import { FacultyPage } from '../faculty/faculty';
import { AnnouncementsPage } from '../announcements/announcements';
// import { MapsPage } from '../maps/maps';
// import { ResourcesPage } from '../resources/resources';
// import { FaqPage } from '../faq/faq';
// import { HomePage } from '../home/home';
// import { ForumPage } from '../forum/forum';


@Component({
  selector: 'page-yorkprofile',
  templateUrl: 'yorkprofile.html',
})
export class YorkprofilePage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { symbol: 'navigate', title: 'Campus Map(s)', page: 'MapsPage' },
      { symbol: 'bookmarks', title: 'Institutional Resources', page: InstResPage },
      { symbol: 'body', title: 'Faculty & Staff', page: FacultyPage },
      { symbol: 'megaphone', title: 'Announcements', page: AnnouncementsPage },
      { symbol: 'book', title: 'Resources', page: 'ResourcesPage' },
      { symbol: 'help', title: 'FAQs', page: 'FaqsPage' },
      { symbol: 'calendar', title: 'Events', page: 'HomePage' },
      { symbol: 'people', title: 'Institute Forum', page: 'ForumPage' }

    ]
  }

  itemSelected(item: any) {
    this.navCtrl.push(item.page);
  }

}
