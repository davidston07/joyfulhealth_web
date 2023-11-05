import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { SuicideModComponent } from './suicide-mod/suicide-mod.component';
import { ParkinsonComponent } from './parkinson/parkinson.component';

@NgModule({
  declarations: [
    AppComponent,
    MentalHealthComponent,
    HomeComponent,
    SuicideModComponent,
    ParkinsonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
