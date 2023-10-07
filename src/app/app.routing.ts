import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from "./app.component"
import {HomeComponent} from "./pages/home/home.component";
import {NumbersComponent} from "./numberInfos/numbers/numbers.component";
import {NumberComponent} from "./numberInfos/number/number.component";
import {GameComponent} from "./game/game.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/:id', component: UserProfileComponent},
  { path: 'numbers', component: NumbersComponent},
  { path: 'number/:number', component: NumberComponent},
  { path: 'active-game', component: GameComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES)
