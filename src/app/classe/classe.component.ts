import { Niveau } from './../model/niveau.model';
import { NgForm } from '@angular/forms';
import { ClasseService } from './../service/classe.service';
import { Classe } from './../model/classe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

classe: Classe;
niveaus: Niveau[];
constructor(private classeService: ClasseService) {

}

listeNiveau() {
  this.classeService.listeNiveau().subscribe((data: Niveau[]) => {
    this.niveaus = data;
  });
}
ngOnInit(): void {
  this.listeNiveau();
}
enregistrerClasse(form: NgForm) {
  this.classe = new Classe();
  this.classe.nom = form.value['nomC'];
  this.classe.niveau = new Niveau();
  this.classe.niveau.code = form.value['niveau'];
    this.classeService.enregistrerClasse(this.classe).subscribe(() => {
    console.log('success');
  },
    (error) => {
      console.log(error);
  }
  );

}
}
