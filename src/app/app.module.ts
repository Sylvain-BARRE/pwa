import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { ConnexionComponent } from './views/connexion/connexion.component';
import { TournoiComponent } from './views/tournoi/tournoi.component';
import { AdministrationComponent } from './views/administration/administration.component';
import { EspaceMembreComponent } from './views/espace-membre/espace-membre.component';
import { InformationsComponent } from './views/informations/informations.component';
import { FormConnexionComponent } from './forms/form-connexion/form-connexion.component';
import { FormInscriptionTournoiComponent } from './forms/form-inscription-tournoi/form-inscription-tournoi.component';
import { FieldDateComponent } from './forms/fields/field-date/field-date.component';
import { FieldClassementComponent } from './forms/fields/field-classement/field-classement.component';
import { FieldLicencieComponent } from './forms/fields/field-licencie/field-licencie.component';
import { FieldPasswordComponent } from './forms/fields/field-password/field-password.component';
import { FieldMailComponent } from './forms/fields/field-mail/field-mail.component';
import { FieldVilleComponent } from './forms/fields/field-ville/field-ville.component';
import { FieldIdentiteComponent } from './forms/fields/field-identite/field-identite.component';
import {RouterModule, Routes} from '@angular/router';
import { NavComponent } from './parts/nav/nav.component';
import {AuthService} from './services/auth.service';
import {AuthGardService} from './services/auth-gard.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FieldSexeComponent } from './forms/fields/field-sexe/field-sexe.component';
import { MailComponent } from './parts/modals/mail/mail.component';
import { FieldMailSubjectComponent } from './forms/fields/field-mail-subject/field-mail-subject.component';
import { FieldMailContentComponent } from './forms/fields/field-mail-content/field-mail-content.component';
import { FormMailComponent } from './forms/form-mail/form-mail.component';
import { FieldLicenceComponent } from './forms/fields/field-licence/field-licence.component';
import { CalendrierComponent } from './views/calendrier/calendrier.component';
import { InscriptionTournoiComponent } from './views/inscription-tournoi/inscription-tournoi.component';

declare let $: any;

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'informations', component: InformationsComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'membre', canActivate: [AuthGardService], component: EspaceMembreComponent },
  { path: 'tournois', canActivate: [AuthGardService], component: TournoiComponent },
  { path: 'tournois/:id/inscription', canActivate: [AuthGardService], component: InscriptionTournoiComponent },
  { path: 'calendrier', canActivate: [AuthGardService], component: CalendrierComponent },
  { path: 'administration', canActivate: [AuthGardService], component: AdministrationComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    TournoiComponent,
    AdministrationComponent,
    EspaceMembreComponent,
    InformationsComponent,
    FormConnexionComponent,
    FormInscriptionTournoiComponent,
    FieldDateComponent,
    FieldClassementComponent,
    FieldLicencieComponent,
    FieldPasswordComponent,
    FieldMailComponent,
    FieldVilleComponent,
    FieldIdentiteComponent,
    NavComponent,
    FieldSexeComponent,
    MailComponent,
    FieldMailSubjectComponent,
    FieldMailContentComponent,
    FormMailComponent,
    FieldLicenceComponent,
    CalendrierComponent,
    InscriptionTournoiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
