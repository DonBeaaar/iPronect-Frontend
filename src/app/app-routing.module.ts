import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'evaluar',
    loadChildren: () => import('./evaluar/evaluar.module').then( m => m.EvaluarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'perf1l',
    loadChildren: () => import('./perf1l/perf1l.module').then( m => m.Perf1lPageModule)
  },
  {
    path: 'disponibles',
    loadChildren: () => import('./disponibles/disponibles.module').then( m => m.DisponiblesPageModule)
  },
  {
    path: 'observaciones',
    loadChildren: () => import('./observaciones/observaciones.module').then( m => m.ObservacionesPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'deta-iie',
    loadChildren: () => import('./deta-iie/deta-iie.module').then( m => m.DetaIIePageModule)
  },
  {
    path: 'perfil-distribuidor',
    loadChildren: () => import('./perfil-distribuidor/perfil-distribuidor.module').then( m => m.PerfilDistribuidorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
