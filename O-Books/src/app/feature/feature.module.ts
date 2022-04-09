import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class FeatureModule { }
