import { Professeur } from './../model/professeur.model';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { ProfesseurService } from '../service/professeur.service';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent {

  constructor(private professeurService: ProfesseurService) {}
  insererProfesseur(form: NgForm) {
    const professeur = new Professeur();
    professeur.nom = form.value['nom'];
    professeur.prenom = form.value['prenom'];
    professeur.email = form.value['email'];
    professeur.adresse = form.value['adresse'];
    professeur.telephone = form.value['telephone'];
    professeur.grade = form.value['grade'];
    this.professeurService.enregistrerProfesseur(professeur).subscribe((res) => {
      console.log('success');
    },
    (error) => {
      console.log(error);
    }
    );
  }

}
