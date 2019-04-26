import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'inventario', loadChildren: './inventario/inventario.module#InventarioPageModule' },
  { path: 'punto', loadChildren: './punto/punto.module#PuntoPageModule' },
  { path: 'linea', loadChildren: './linea/linea.module#LineaPageModule' },
  { path: 'poligono', loadChildren: './poligono/poligono.module#PoligonoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
