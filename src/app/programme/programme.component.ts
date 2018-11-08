import { Programme } from './../model/programme.model';
import { ProgrammeService } from './../service/programme.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private programmeService: ProgrammeService) {}
  ajouterProgramme(form: NgForm) {
   const  programme = new Programme();
   programme.nom = form.value['nom'];
   programme.dateCreation = form.value['dateCreation'];
   programme.dateFin = form.value['dateFin'];
  this.programmeService.EnregistrerProgramme(programme).subscribe(res => {
      console.log('success');
  });

  }
}
