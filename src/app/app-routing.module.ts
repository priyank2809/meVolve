import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
