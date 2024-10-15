import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', component:MenuprincipalComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
