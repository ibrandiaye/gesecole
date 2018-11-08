import { SceanceCours } from './../model/sceanceCours.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SceanceCoursService  {
  url = 'http://localhost:8081/api/sceanceCours/';
  constructor(private http: HttpClient) {}
  enregistrerSceance(sceanceCours: SceanceCours) {
    return this.http.post<SceanceCours>(this.url + 'save', sceanceCours);
  }
}
