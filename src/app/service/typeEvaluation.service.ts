import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TypeEvaluationService {
 constructor(private http: HttpClient) {}
 listeTypeEvaluation() {
   return this.http.get('http://localhost:8081/api/typeEvaluation/all');
 }
}
