import { Evaluation } from './evaluation.model';
import { Eleve } from './eleve.model';

export class Note {
  public code: number;
  public  note: number;
  public eleve: Eleve;
  public evaluation: Evaluation;
}
