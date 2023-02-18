import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {UserInfoComponent} from "./pages/user-info/user-info.component";
import {CollectionComponent} from "./pages/collection/collection.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'info', component: UserInfoComponent},
  {path: 'collection', component: CollectionComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
