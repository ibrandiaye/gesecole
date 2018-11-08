import { Matiere } from './../model/matiere.model';
import { Evaluation } from './../model/evaluation.model';
import { EvaluationService } from './../service/evaluation.service';
import { ClasseService } from './../service/classe.service';
import { MatiereService } from './../service/matiere.service';
import { TypeEvaluation } from './../model/typeEvaluation.model';
import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { TypeEvaluationService } from '../service/typeEvaluation.service';
import { Classe } from '../model/classe.model';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  typeEvaluations: TypeEvaluation[];
  classes: Classe[];
  matieres: Matiere[];
  ngOnInit(): void {
    this.listeTypeEvaluation();
    this.listeClasse();
    this.listeMatiere();
  }
  constructor(private typeEvaluationService: TypeEvaluationService, private matiereService: MatiereService,
    private classeService: ClasseService, private evaluationService: EvaluationService) {}
  listeTypeEvaluation() {
    this.typeEvaluationService.listeTypeEvaluation().subscribe((resp: TypeEvaluation[]) => {
        this.typeEvaluations = resp;
    });
  }
  listeClasse() {
    this.classeService.listeClasse().subscribe((resp: Classe[]) => {
      this.classes = resp;
    });
  }
  listeMatiere() {
    this.matiereService.listeMatiere().subscribe((resp: Matiere[]) => {
      this.matieres = resp;
    });
  }
  enregistrerEvaluation(form: NgForm) {
    const evaluation = new Evaluation();
    evaluation.date = form.value['date'];
    evaluation.libelle = form.value['libelle'];
    evaluation.matiere = new Matiere();
    evaluation.matiere.code = form.value['matiere'];
    evaluation.semestre = form.value['semestre'];
    evaluation.classe = new Classe();
    evaluation.classe.code = form.value['classe'];
    evaluation.type_evaluation = new TypeEvaluation();
    evaluation.type_evaluation.code = form.value['typeEvaluation'];
    console.log(evaluation.type_evaluation.code);
    this.evaluationService.enregistrerEvaluation(evaluation).subscribe((resp: Evaluation) => {
      console.log('success');
    },
    (error) => {
      console.log('error');
    });

  }
}
