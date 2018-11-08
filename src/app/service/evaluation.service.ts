import { Evaluation } from './../model/evaluation.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EvaluationService {
  url = 'http://localhost:8081/api/evaluation/';
  constructor(private http: HttpClient) {}
  public enregistrerEvaluation(evaluation: Evaluation) {
    return this.http.post<Evaluation>(this.url + 'save', evaluation);
  }
  public listeEvaluation() {
    return this.http.get(this.url + 'all');
  }
}
