import { Inscription } from './inscription.model';
import { Matiere } from './matiere.model';

export class Programme {
    public code: number;
    public nom: string;
    public dateCreation: Date;
    public dateFin: Date;
    public matiere: Matiere[];
    public inscription: Inscription[];
}
