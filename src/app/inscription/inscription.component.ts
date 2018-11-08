import { ClasseService } from './../service/classe.service';
import { Inscription } from './../model/inscription.model';
import { Programme } from './../model/programme.model';
import { InscriptionService } from './../service/inscription.service';
import { EleveService } from './../service/eleve.service';
import { Component, OnInit } from '@angular/core';
import { Eleve } from '../model/eleve.model';
import { ProgrammeService } from '../service/programme.service';
import { NgForm } from '@angular/forms';
import { Classe } from '../model/classe.model';

@Component({
selector: 'app-inscription',
templateUrl: './inscription.component.html',
styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  eleves: Eleve[];
  programmes: Programme[];
  classes: Classe[];
  constructor(private eleveService: EleveService, private inscriptionService: InscriptionService,
     private programmeService: ProgrammeService, private classeService: ClasseService) {}
  ngOnInit(): void {
   this.listEleve();
   this.listeProgramme();
   this.listeClasse();
  }
  public listeProgramme() {
    this.programmeService.listeProgramme().subscribe((res: Programme[] ) => {
      this.programmes = res;
    });
  }
  public listEleve() {
    this.eleveService.listeELeve().subscribe((res: Eleve[]) => {
      this.eleves = res;
  });
  }
  public listeClasse() {
    this.classeService.listeClasse().subscribe((res: Classe[]) => {
      this.classes = res;
    });
  }
  enregistrerInscription(form: NgForm) {
    const inscription = new Inscription();
    inscription.montant = form.value['montant'];
    inscription.eleve = new Eleve();
    inscription.eleve.code = form.value['eleve'];
    inscription.programme = new Programme();
    inscription.programme.code = form.value['programme'];
    inscription.classe = new Classe();
    inscription.classe.code = form.value['classe'];
    this.inscriptionService.enregistrerInscription(inscription).subscribe((res: Inscription ) => {
      console.log('success');
    },
    (error) => {
        console.log('error');
    });
  }
}
