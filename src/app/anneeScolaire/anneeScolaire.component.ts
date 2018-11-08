import { AnneeScolaire } from './../model/anneeScolaire.model';
import { AnneeScolaireService } from './../service/anneeScolaire.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-annee-scolaire',
  templateUrl : './anneeScolaire.component.html',
  styleUrls: ['./anneeScolaire.component.css']
})
export class AnneeScolaireComponent {
  anneeScolaire: AnneeScolaire;
  constructor(private anneeScolaireService: AnneeScolaireService) {}
ajouterAnneScolaire(form: NgForm) {
  this.anneeScolaire = new AnneeScolaire();
  this.anneeScolaire.dateDebut = form.value['dateDebut'];
  this.anneeScolaire.dateFin = form.value['dateFin'];
  this.anneeScolaire.statut = form.value['statut'];
  console.log(form.value['example-chosen']);
  this.anneeScolaireService.enregistrerAnneeScolaire(this.anneeScolaire).subscribe(() => {
    console.log('success');
  },
  (error) => {
    console.log(error);
  }
  );
}


}
