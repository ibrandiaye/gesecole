import { EleveService } from '../service/eleve.service';
import { Eleve } from '../model/eleve.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Tuteur } from '../model/tuteur.model';
import { Router } from '@angular/router';
declare var require: any;

const fileUpload = require('fuctbase64');

@Component({
  selector: 'app-new-eleve',
  templateUrl: '/new-eleve.component.html',
  styles: ['./new-eleve.component.css']
})
export class NewEleveComponent implements OnInit {
  eleve: Eleve;
  image: string;
  type: string;
  el: Eleve;
  fileResult: any;
ngOnInit(): void {
  }

  constructor(private  eleveService: EleveService, private route: Router ) {}
  onFileChange(event) {
    const result = fileUpload(event).then(a => {
      this.fileResult = a;
      this.image = a.base64;
      this.type = a.type;
      console.log(a);
    });

  }
  insererEleve(form: NgForm) {
    this.eleve = new Eleve();
    this.eleve.nom = form.value['nomE'];
    this.eleve.prenom = form.value['prenomE'];
    this.eleve.telephone = form.value['telephoneE'];
    this.eleve.adresse = form.value['adresseE'];
    this.eleve.dateNaissance = form.value['naissanceE'];
    this.eleve.lieuNaissance = form.value['lieuE'];
    form.value['image'] = 'data:' + this.type + ';base64,' + this.image;
    this.eleve.image = form.value['image'];
    this.eleve.tuteur = new Tuteur();
    this.eleve.tuteur.nom = form.value['nomT'];
    this.eleve.tuteur.prenom = form.value['prenomT'];
    this.eleve.tuteur.telephone = form.value['telephoneT'];
    this.eleve.tuteur.adresse = form.value['adresseT'];
    this.eleveService.enregistrerEleve(this.eleve).subscribe(res => {
     // console.log('succees' + res.code);
   this.route.navigate(['eleve', res.code]);
    },
      (error) => {
          console.log('erreur' + error);
    });

  }

}
