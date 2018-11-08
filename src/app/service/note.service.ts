import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';

@Injectable()
export class NoteService {
  url = 'http://localhost:8081/api/note/';
  constructor(private http: HttpClient) {}
  public enregistrerNote(note: Note) {
    return this.http.post<Note>(this.url + 'save', note);
  }
}
