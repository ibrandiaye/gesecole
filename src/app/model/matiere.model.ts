import { Programme } from './programme.model';
import { Professeur } from './professeur.model';
export class Matiere {
  public code: number;
  public nom: string;
  public coefficient: number;
  public professeur: Professeur;
  public programme: Programme;
}
