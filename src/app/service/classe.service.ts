import { Classe } from './../model/classe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClasseService {
  url = 'http://localhost:8081/api/classe/';
  constructor(private httpclient: HttpClient) {}
  enregistrerClasse(classe: Classe) {
   return this.httpclient.post<Classe>(this.url + 'save', classe);
  }
  listeClasse() {
    return this.httpclient.get( this.url + 'all');
  }
  listeNiveau() {
    return this.httpclient.get('http://localhost:8081/api/niveau/all');
  }
}
