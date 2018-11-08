import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professeur } from '../model/professeur.model';

@Injectable()
export class ProfesseurService {
  url = 'http://localhost:8081/api/professeur/';
  constructor(private httpClient: HttpClient) {}
  public enregistrerProfesseur(professeur: Professeur) {
    return this.httpClient.post<Professeur>(this.url + 'save', professeur);
  }
  public listeProfesseur() {
    return this.httpClient.get(this.url + 'all');
  }
}
