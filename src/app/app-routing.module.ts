import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'heroes'},
  {path: 'heroes', loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule)},
  {path: '**', redirectTo: 'heroes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
