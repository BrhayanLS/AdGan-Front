import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllCattleComponent } from './pages/cattle/all-cattle/all-cattle.component';
import { CattleDetailComponent } from './pages/cattle/cattle-detail/cattle-detail.component';
import { CattlesComponent } from './pages/cattle/cattles/cattles.component';
import { ResumeComponent } from './pages/cattle/resume/resume.component';
import { SoldComponent } from './pages/cattle/sold/sold.component';
import { NotAvailableComponent } from './pages/cattle/not-available/not-available.component';
import { AllOwnerComponent } from './pages/owner/all-owner/all-owner.component';
import { OwnerDetailComponent } from './pages/owner/owner-detail/owner-detail.component';
import { OwnersComponent } from './pages/owner/owners/owners.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    //Cattles
    {path: 'allCattles', component: AllCattleComponent},
    {path: 'cattle/:id', component: CattleDetailComponent},
    {path: 'cattles', component: CattlesComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'sold', component: SoldComponent},
    {path: 'notAvailable', component: NotAvailableComponent},

    //Owners
    {path: 'allOwners', component: AllOwnerComponent},
    {path: 'owner/:id', component: OwnerDetailComponent},
    {path: 'owners', component: OwnersComponent}
];