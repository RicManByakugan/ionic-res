import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavIntPageRoutingModule } from './nav-int-routing.module';

import { NavIntPage } from './nav-int.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavIntPageRoutingModule
  ],
  declarations: [NavIntPage]
})
export class NavIntPageModule {}
