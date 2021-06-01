import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCharactersComponent } from './show-characters/show-characters.component';

const routes: Routes = [
  {path: 'characters', component: ShowCharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
