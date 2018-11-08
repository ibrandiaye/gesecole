import { Administration } from './../model/administration.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AdministrationService {
  url = 'http://localhost:8081/api/administration/';
    constructor(private httpClient: HttpClient) {}
    public enregistrerAdministration(administration: Administration) {
      return this.httpClient.post<Administration>(this.url + 'save', administration);
    }

}
