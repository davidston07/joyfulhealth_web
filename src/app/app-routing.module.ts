import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { HomeComponent } from './home/home.component';
import { SuicideModComponent } from './suicide-mod/suicide-mod.component';
import { ParkinsonComponent } from './parkinson/parkinson.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mental-health', component: MentalHealthComponent },
  { path: 'suicide-mod', component: SuicideModComponent },
  { path: 'parkinson', component: ParkinsonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
