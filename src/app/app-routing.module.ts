import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { OffersComponent } from './offers/offers.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
   { path: 'accomodation', component: AccomodationComponent },
   { path: 'celebrations', component: CelebrationsComponent },
   { path: 'food-and-beverage', component: FoodAndBeverageComponent },
   { path: 'lifestyle', component: LifestyleComponent },
   { path: 'offers', component: OffersComponent },
   { path: 'weddings', component: WeddingsComponent },
   { path: 'signin', component: SigninComponent },
   { path: 'signup', component: SignupComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { enableTracing: true })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
