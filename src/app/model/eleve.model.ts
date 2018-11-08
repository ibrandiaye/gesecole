import { Tuteur } from './tuteur.model';
export class Eleve {
  public code: number;
  public nom: string;
  public prenom: string;
  public telephone: string;
  public adresse: string;
  public dateNaissance: Date;
  public lieuNaissance: string;
  public image?: string;
  public tuteur: Tuteur;
}
