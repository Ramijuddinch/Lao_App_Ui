import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersettingPage } from './usersetting';

@NgModule({
  declarations: [
    UsersettingPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersettingPage),
  ],
})
export class UsersettingPageModule {}
