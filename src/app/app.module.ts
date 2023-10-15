import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NumberComponent } from './numberInfos/number/number.component';
import { AnswersComponent } from './game/answers/answers.component';
import { TimerComponent } from './game/timer/timer.component';
import { CheckoutModeComponent } from './game/checkout-mode/checkout-mode.component';
import { HomeComponent } from './pages/home/home.component'
import { StoreModule } from '@ngrx/store';
import { numbersReducer } from './store/numbers.reducer';
import {routing} from "./app.routing";
import { NumbersComponent } from './numberInfos/numbers/numbers.component';
import { GameComponent } from './game/game.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { DartboardComponent } from './dartboard/dartboard.component';
import { BackToMainComponent } from './navigation/header/back-to-main/back-to-main.component';
import { TestPipe } from './pipes/test.pipe';
import { LogoComponent } from './navigation/logo/logo.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./pages/login/http.service";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/auth.service";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
//
// import * as firebase from 'firebase';
// firebase.initializeApp(environment.firebase);

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    routing,
    StoreModule.forRoot({numbers: numbersReducer}),
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NumberComponent,
    AnswersComponent,
    TimerComponent,
    CheckoutModeComponent,
    HomeComponent,
    NumbersComponent,
    GameComponent,
    UserProfileComponent,
    DartboardComponent,
    BackToMainComponent,
    TestPipe,
    LogoComponent,
    LoginComponent,

  ],

  providers: [HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
