import { Planning } from './../model/planning.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanningService {
  url = 'http://localhost:8081/api/planning/';
  constructor(private http: HttpClient) {}
  enregistrerPlanning(planning: Planning) {
    return this.http.post<Planning>( this.url + 'save', planning);
  }
  listeplanning() {
    return this.http.get(this.url + 'all');
  }
}
