import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabimplPageRoutingModule } from './tabimpl-routing.module';

import { TabimplPage } from './tabimpl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabimplPageRoutingModule
  ],
  declarations: [TabimplPage]
})
export class TabimplPageModule {}
