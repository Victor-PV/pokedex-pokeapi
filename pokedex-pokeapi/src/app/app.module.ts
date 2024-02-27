import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {PokedexBodyComponent} from './pages/pokedex/pokedex-body/pokedex-body.component';
import {PokedexHeaderComponent} from './pages/pokedex/pokedex-header/pokedex-header.component';
import { PokemonBodyComponent } from './pages/pokemon/pokemon-body/pokemon-body.component';
import { PokemonHeaderComponent } from './pages/pokemon/pokemon-header/pokemon-header.component';
import { PokemonPageComponent } from './pages/pokemon/pokemon-page/pokemon-page.component';
import { PokedexPageComponent } from './pages/pokedex/pokedex-page/pokedex-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PokedexBodyComponent,
    PokedexHeaderComponent,
    PokemonBodyComponent,
    PokemonHeaderComponent,
    PokemonPageComponent,
    PokedexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
