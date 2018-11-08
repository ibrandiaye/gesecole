import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Programme } from '../model';

@Injectable()
export class ProgrammeService {
  url = 'http://localhost:8081/api/programme/';
constructor(private httpClient: HttpClient) {}

public EnregistrerProgramme(programme: Programme) {
  return this.httpClient.post<Programme>(this.url + 'save' , programme);
}
public listeProgramme() {
  return this.httpClient.get(this.url + 'all');
}
}
