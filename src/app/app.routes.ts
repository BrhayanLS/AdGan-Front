import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllCattleComponent } from './pages/cattle/all-cattle/all-cattle.component';
import { CattleDetailComponent } from './pages/cattle/cattle-detail/cattle-detail.component';
import { CattlesComponent } from './pages/cattle/cattles/cattles.component';
import { ResumeComponent } from './pages/cattle/resume/resume.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    //Cattles
    {path: 'allCattles', component: AllCattleComponent},
    {path: 'cattle/:id', component: CattleDetailComponent},
    {path: 'cattles', component: CattlesComponent},
    {path: 'resume', component: ResumeComponent}
];