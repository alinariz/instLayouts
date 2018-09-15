import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ThemeSettingsProvider } from '../providers/theme-settings/theme-settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  selectedPrimaryColor: String;
  selectedSecondaryColor: String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private primColor: ThemeSettingsProvider, private secColor: ThemeSettingsProvider) {
    
    this.primColor.getPrimaryActive().subscribe(val => this.selectedPrimaryColor = val);
    this.secColor.getSecondaryActive().subscribe(val => this.selectedSecondaryColor = val);
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
