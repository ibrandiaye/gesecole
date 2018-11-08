import { Inscription } from './../model/inscription.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InscriptionService {
  url = 'http://localhost:8081/api/inscription/';
  constructor(private http: HttpClient) {}

  enregistrerInscription( inscription: Inscription) {
    return this.http.post<Inscription>(this.url + 'save' , inscription);
  }

}
