import { Programme } from './programme.model';
import { Eleve } from './eleve.model';
import { Classe } from './classe.model';


export class Inscription {
  public code: number;
  public date: Date;
  public montant: number;
  public eleve: Eleve;
  public classe: Classe;
  public programme: Programme;

}
