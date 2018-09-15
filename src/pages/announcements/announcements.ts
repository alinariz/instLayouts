import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnnounceDetailsPage } from '../announce-details/announce-details';

@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html',
})
export class AnnouncementsPage {
  titles: string[];
  dates: string[];
  articles: string[];
  announcements: Array<{ title: string, date: string, article: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titles = ['Article 1 Title', 'Article 2 Title'];
    this.dates = ['Date 1', 'Date 2'];
    this.articles = ['Article 1 Content', 'Article 2 Content'];

    this.announcements = [];
    for (let i = 0; i < 2; i++) {
      this.announcements.push({
        title: this.titles[i],
        date: this.dates[i],
        article: this.articles[i]
      });
    }
  }

  goToArticle(event, announcement) {
    this.navCtrl.push(AnnounceDetailsPage, {
      announcement: announcement
    });
  }

}
