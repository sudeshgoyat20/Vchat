import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChangepasswordPage } from "../changepassword/changepassword";
import { ProfilePage } from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactPage;
  tab2Root = AboutPage;
  tab3Root = ChangepasswordPage;
  tab4Root =ProfilePage ;
  constructor() {

  }
}
