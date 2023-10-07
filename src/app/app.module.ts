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


@NgModule({
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
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    StoreModule.forRoot({ numbers: numbersReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
