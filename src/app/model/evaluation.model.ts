import { Classe } from './classe.model';
import { Matiere } from './matiere.model';
import { TypeEvaluation } from './typeEvaluation.model';
export class Evaluation {
  public code: number;
  public date: Date;
  public semestre: string;
  public libelle: string;
  public matiere: Matiere;
  public classe: Classe;
  public type_evaluation: TypeEvaluation;
}
