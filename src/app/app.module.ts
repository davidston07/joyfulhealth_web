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
import { BrainTumorComponent } from './brain-tumor/brain-tumor.component';
import { HttpClientModule } from '@angular/common/http';
import { DiseasesComponent } from './diseases/diseases.component';
import { HeartDiseaseComponent } from './heart-disease/heart-disease.component';

@NgModule({
  declarations: [
    AppComponent,
    MentalHealthComponent,
    HomeComponent,
    SuicideModComponent,
    ParkinsonComponent,
    BrainTumorComponent,
    DiseasesComponent,
    HeartDiseaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
