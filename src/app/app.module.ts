import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { InpatientComponent } from './inpatient/inpatient.component';
import { FooterComponent } from './footer/footer.component';
import { confrmPassword } from './confrmpass/confrmpass.component';
import { EqualValidatorDirective } from './equal-validator.directive';
import { AppointmentComponent } from './appointment/appointment.component';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    InpatientComponent,
    FooterComponent,
    confrmPassword,
    EqualValidatorDirective,
    AppointmentComponent,
    OtpComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
