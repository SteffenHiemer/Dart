import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NumbersComponent} from "./numberInfos/numbers/numbers.component";
import {NumberComponent} from "./numberInfos/number/number.component";
import {GameComponent} from "./game/game.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {LoginComponent} from "./pages/login/login.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/:id', component: UserProfileComponent},
  { path: 'numbers', component: NumbersComponent},
  { path: 'number/:number', component: NumberComponent},
  { path: 'login', component: LoginComponent},
  { path: 'active-game', component: GameComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES)
