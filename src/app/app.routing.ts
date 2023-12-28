import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NumbersComponent} from "./numberInfos/numbers/numbers.component";
import {NumberComponent} from "./numberInfos/number/number.component";
import {GameComponent} from "./game/game.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {LoginComponent} from "./pages/login/login.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ImpressumComponent} from "./pages/impressum/impressum.component";
import {DatenschutzComponent} from "./pages/datenschutz/datenschutz.component";
import {AgbComponent} from "./pages/agb/agb.component";
import {BackButtonWithFooterComponent} from "./layout/back-button-with-footer/back-button-with-footer.component";

const LayoutSimple: Routes = [
  { path: 'impressum', component: ImpressumComponent},
  { path: 'kontakt', component: ContactComponent},
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'agb', component: AgbComponent },
];

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/:id', component: UserProfileComponent},
  { path: 'numbers', component: NumbersComponent},
  { path: 'number/:number', component: NumberComponent},
  { path: 'login', component: LoginComponent},

  { path: 'active-game', component: GameComponent},

  // FOOTER
  { path: '', component: BackButtonWithFooterComponent, children: LayoutSimple },
]


export const routing = RouterModule.forRoot(APP_ROUTES)
