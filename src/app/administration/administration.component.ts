import { Administration } from './../model/administration.model';
import { AdministrationService } from './../service/administration.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent {

  constructor(private administrationService: AdministrationService) {}
  insererAdministration(form: NgForm) {
    const administration = new Administration();
    administration.nom = form.value['nom'];
    administration.prenom = form.value['prenom'];
    administration.email = form.value['email'];
    administration.adresse = form.value['adresse'];
    administration.telephone = form.value['telephone'];
    administration.poste = form.value['poste'];
    this.administrationService.enregistrerAdministration(administration).subscribe((res) => {
        console.log('success');
    },
    (error) => {
        console.log(error);
    }
    );
  }
}
