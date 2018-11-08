import { Matiere } from './../model/matiere.model';
import { NgForm } from '@angular/forms';
import { Programme } from './../model/programme.model';
import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from '../service/programme.service';
import { Professeur } from '../model/professeur.model';
import { ProfesseurService } from '../service/professeur.service';
import { MatiereService } from '../service/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  programmes: Programme[];
  professeurs: Professeur[];

  constructor(private programmeService: ProgrammeService, private professeurService: ProfesseurService,
    private matiereService: MatiereService) {}
  ngOnInit(): void {
    this.listeProgramme();
    this.listeProfesseur();
  }
listeProgramme() {
  this.programmeService.listeProgramme().subscribe((res: Programme[]) => {
    this.programmes = res;
  });

}
listeProfesseur() {
  this.professeurService.listeProfesseur().subscribe((res: Professeur[]) => {
    this.professeurs = res;
  });
}
enregistrerMatiere(form: NgForm) {
const matiere = new Matiere();
matiere.nom = form.value['nom'];
matiere.coefficient = form.value['coefficient'];
matiere.professeur = new Professeur();
matiere.professeur.code = form.value['professeur'];
matiere.programme = new Programme();
matiere.programme.code = form.value['programme'];
this.matiereService.enregistrerMatiere(matiere).subscribe((res: Matiere) => {
  console.log('success');
},
(error) => {
  console.log(error);
});

}

}
