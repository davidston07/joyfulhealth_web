import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { HomeComponent } from './home/home.component';
import { SuicideModComponent } from './suicide-mod/suicide-mod.component';
import { ParkinsonComponent } from './parkinson/parkinson.component';
import { BrainTumorComponent } from './brain-tumor/brain-tumor.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { HeartDiseaseComponent } from './heart-disease/heart-disease.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mental-health', component: MentalHealthComponent },
  { path: 'suicide-mod', component: SuicideModComponent },
  { path: 'parkinson', component: ParkinsonComponent },
  { path: 'brain-tumor', component: BrainTumorComponent },
  { path: 'diseases', component: DiseasesComponent },
  { path: 'heart-diseases', component: HeartDiseaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
