import { EleveService } from './../service/eleve.service';
import { Eleve } from './../model/eleve.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html'
})
export class EleveComponent implements OnInit {
  eleve: Eleve;
  constructor(private eleveService: EleveService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.eleveService.afficherUneEleve(id).subscribe((response: Eleve) => {
      this.eleve = response;
      console.log(this.eleve);
    });
   }

}
