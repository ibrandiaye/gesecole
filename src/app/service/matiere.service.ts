import { Matiere } from './../model/matiere.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MatiereService {
  url = 'http://localhost:8081/api/matiere/';
  constructor(private httpClient: HttpClient) {}
  public enregistrerMatiere(matiere: Matiere) {
    return this.httpClient.post<Matiere>(this.url + 'save', matiere);
  }
  public listeMatiere() {
    return this.httpClient.get(this.url + 'all');
  }
}
