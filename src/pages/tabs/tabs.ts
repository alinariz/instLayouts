import { Component } from '@angular/core';
import { InstitutionsPage } from '../institutions/institutions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InstitutionsPage;

  constructor() {

  }
}
