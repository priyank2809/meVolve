import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FeaturesComponent,
        PricingComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SwiperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
