import { Time } from '@angular/common';
import { Planning } from './planning.model';

export class SceanceCours {
  public code: number;
  public dateSceance: Date;
  public heureDebut: Time;
  public heureFin: Time;
  public planning: Planning;
}
