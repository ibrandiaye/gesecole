import { NgForm } from '@angular/forms';
import { Evaluation } from './../model/evaluation.model';
import { EleveService } from './../service/eleve.service';
import { Eleve } from './../model/eleve.model';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { EvaluationService } from '../service/evaluation.service';
import { Note } from '../model/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  eleves: Eleve[];
  evaluations: Evaluation[];
  ngOnInit(): void {
    this.listeEleve();
    this.listeEvaluation();
  }

  constructor(private noteService: NoteService, private evaluationService: EvaluationService, private eleveService: EleveService ) {}
listeEleve() {
  this.eleveService.listeELeve().subscribe((resp: Eleve[]) => {
    this.eleves = resp;
  });
}
listeEvaluation() {
  this.evaluationService.listeEvaluation().subscribe((resp: Evaluation[]  ) => {
      this.evaluations = resp;
  });
}
enregistrerNote(form: NgForm) {
  const note = new Note();
  note.note = form.value['note'];
  note.eleve = new Eleve();
  note.eleve.code = form.value['eleve'];
  note.evaluation = new Evaluation();
  note.evaluation.code = form.value['evaluation'];
  this.noteService.enregistrerNote(note).subscribe((resp: Note) => {
    console.log('success');
  },
  (error) => {
    console.log('error');
  });
}

}
