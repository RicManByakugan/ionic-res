import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TailwindNextPageRoutingModule } from './tailwind-next-routing.module';

import { TailwindNextPage } from './tailwind-next.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TailwindNextPageRoutingModule
  ],
  declarations: [TailwindNextPage]
})
export class TailwindNextPageModule {}
