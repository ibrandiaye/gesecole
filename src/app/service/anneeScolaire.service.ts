import { AnneeScolaire } from '../model/anneeScolaire.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnneeScolaireService {
  constructor(private http: HttpClient) {}
  public enregistrerAnneeScolaire(anneeScolaire: AnneeScolaire) {
   return  this.http.post('http://localhost:8081/api/anneeScolaire/save', anneeScolaire);
  }
}
