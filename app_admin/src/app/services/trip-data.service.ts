import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/common/http';


import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';


@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage) {}


  private apiBaseurl = 'http://localhost:3000/api/';
  private tripUrl = ${this.apiBaseurl}trips/';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
}

addTrip(formData: Trip) : Observable<Trip> {
  return this.http.post<Trip>(this.url, formData);
  }
}