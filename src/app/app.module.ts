import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InstitutionsPage } from '../pages/institutions/institutions';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InstitutioneditPage } from '../pages/institutionedit/institutionedit';
import { InstitutionProfilePage } from '../pages/institution-profile/institution-profile';
import { OcadprofilePage } from '../pages/ocadprofile/ocadprofile';
import { RyersonprofilePage } from '../pages/ryersonprofile/ryersonprofile';
import { YorkprofilePage } from '../pages/yorkprofile/yorkprofile';
import { InstResPage } from '../pages/inst-res/inst-res';
import { InstResDetailsPage } from '../pages/inst-res-details/inst-res-details';
import { FacultyPage } from '../pages/faculty/faculty';
import { FacDetailsPage } from '../pages/fac-details/fac-details';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { AnnounceDetailsPage } from '../pages/announce-details/announce-details';
import { ThemeSettingsProvider } from '../providers/theme-settings/theme-settings';

@NgModule({
  declarations: [
    MyApp,
    InstitutionsPage,
    TabsPage,
    InstitutioneditPage,
    InstitutionProfilePage,
    OcadprofilePage,
    RyersonprofilePage,
    YorkprofilePage,
    InstResPage,
    InstResDetailsPage,
    FacultyPage,
    FacDetailsPage,
    AnnouncementsPage,
    AnnounceDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InstitutionsPage,
    TabsPage,
    InstitutioneditPage,
    InstitutionProfilePage,
    OcadprofilePage,
    RyersonprofilePage,
    YorkprofilePage,
    InstResPage,
    InstResDetailsPage,
    FacultyPage,
    FacDetailsPage,
    AnnouncementsPage,
    AnnounceDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ThemeSettingsProvider
  ]
})
export class AppModule {}
