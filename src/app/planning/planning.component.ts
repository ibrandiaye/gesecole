import { Planning } from './../model/planning.model';
import { MatiereService } from './../service/matiere.service';
import { PlanningService } from './../service/planning.service';
import { Component, OnInit } from '@angular/core';
import { Matiere } from '../model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  matieres: Matiere[];
  constructor(private planningService: PlanningService, private matiereService: MatiereService) { }

  ngOnInit() {
    this.listeMatiere();
  }
  listeMatiere() {
    this.matiereService.listeMatiere().subscribe((resp: Matiere[]) => {
      this.matieres = resp;
    });
  }
  enregistrerPlanning(form: NgForm) {
    const planning = new Planning();
    planning.heureDebut = form.value['heureDebut'];
    planning.heureFin = form.value['heureFin'];
    planning.jour = form.value['jour'];
    planning.matiere = new Matiere();
    planning.matiere.code = form.value['matiere'];
    this.planningService.enregistrerPlanning(planning).subscribe((resp: Planning) => {
      console.log(planning);
    },
    (error) => {
      console.log(error);
    });
  }
}
