import {Licencie} from './Licencie.model';

export class Membre extends Licencie {

  constructor(public licence: string,
              public nom: string,
              public prenom: string,
              public sexe: string,
              public classementDouble: string,
              public classementMixte: string,
              public classementSimple: string,
              public handibadiste: boolean,
              public jeune: boolean,
              public mail: string,
              public partenaireDoubleParDefaut: Licencie,
              public partenaireMixteParDefaut: Licencie,
              public role: string,
              public telephone: string) {
    super(licence, nom, prenom, sexe);
  }
}
