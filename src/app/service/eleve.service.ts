import { HttpClient } from '@angular/common/http';
import { Eleve } from '../model/eleve.model';
import { Injectable } from '@angular/core';
@Injectable()
export class EleveService {
  url = 'http://localhost:8081/api/eleve';
  constructor(private http: HttpClient ) {}

  enregistrerEleve(eleve: Eleve) {
    return this.http.post<Eleve>(this.url + '/save', eleve);
  }
  afficherUneEleve(id: number) {
    return this.http.get<Eleve>(this.url + '/eleve/' + id );
  }
  listeELeve() {
    return  this.http.get(this.url + '/liste');
  }
  listeEleveParClasse(nom: string) {
    return this.http.get(this.url + '/eleves/' + nom);
  }
}
