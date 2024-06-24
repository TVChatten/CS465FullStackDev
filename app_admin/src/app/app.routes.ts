import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripEditComponent } from './edit-trip/edit-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'list-trips', component: TripListingComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'edit-trip', component: TripEditComponent },
    { path: '', component: HomeComponent, pathMatch: 'full'}
    
];
