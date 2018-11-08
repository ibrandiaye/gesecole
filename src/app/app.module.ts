import { SceanceCoursService } from './service/sceanceCours.service';
import { PlanningService } from './service/planning.service';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { NoteComponent } from './note/note.component';
import { EvaluationService } from './service/evaluation.service';
import { MatiereComponent } from './matiere/matiere.component';
import { MatiereService } from './service/matiere.service';
import { ProfesseurComponent } from './professeur/professeur.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProfesseurService } from './service/professeur.service';
import { AdministrationService } from './service/administration.service';
import { InscriptionService } from './service/inscription.service';
import { ProgrammeComponent } from './programme/programme.component';
import { ClasseService } from './service/classe.service';
import { AnneeScolaireComponent } from './anneeScolaire/anneeScolaire.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewEleveComponent } from './eleve/new-eleve.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EleveService } from './service/eleve.service';
import { AnneeScolaireService } from './service/anneeScolaire.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ClasseComponent } from './classe/classe.component';
import { EleveComponent } from './eleve/eleve.component';
import { ProgrammeService } from './service/programme.service';
import { TypeEvaluationService } from './service/typeEvaluation.service';
import { NoteService } from './service/note.service';
import { PlanningComponent } from './planning/planning.component';
import { SceanceCoursComponent } from './sceance-cours/sceance-cours.component';

const appRouters: Routes = [
{path : 'enregistrer-eleve', component:  NewEleveComponent},
{path : 'eleve/:id', component:  EleveComponent},
{path : 'enregistrer-annee-scolaire', component:  AnneeScolaireComponent},
{path : 'enregistrer-classe', component:  ClasseComponent},
{path : 'enregistrer-programme', component: ProgrammeComponent},
{path : 'enregistrer-inscription', component: InscriptionComponent},
{path : 'enregistrer-administration', component: AdministrationComponent},
{path : 'enregistrer-professeur', component: ProfesseurComponent},
{path : 'enregistrer-matiere', component: MatiereComponent},
{path : 'enregistrer-note', component: NoteComponent},
{path : 'enregistrer-evaluation', component: EvaluationComponent},
{path : 'ng ', component: PlanningComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewEleveComponent,
    InscriptionComponent,
    AnneeScolaireComponent,
    ClasseComponent,
    EleveComponent,
    ProgrammeComponent,
    AdministrationComponent,
    ProfesseurComponent,
    MatiereComponent,
    EvaluationComponent,
    NoteComponent,
    PlanningComponent,
    SceanceCoursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouters)

  ],
  providers: [ EleveService,
    AnneeScolaireService,
     ClasseService, ProgrammeService, InscriptionService,
    AdministrationService, ProfesseurService, MatiereService,
    TypeEvaluationService, EvaluationService, NoteService,
    PlanningService, SceanceCoursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
