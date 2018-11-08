import { Time } from '@angular/common';
import { Matiere } from './matiere.model';

export class Planning {
  public code: number;
  public heureDebut: Time;
  public heureFin: Time;
  public jour: string;
  public matiere: Matiere;
}
