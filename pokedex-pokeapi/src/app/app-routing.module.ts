import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex/pokedex-page/pokedex-page.component';


const routes: Routes = [
  {path: 'pokedex', component: PokedexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
