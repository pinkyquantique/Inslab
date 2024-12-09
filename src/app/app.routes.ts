import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [ 
     { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    {
      path: 'auth',
      loadChildren: () => import('../app/auth-module/auth-module.module').then(m => m.AuthModule)
    },
    {
      path: 'insurance',
      loadChildren: () => import('../app/component/component.module').then(m => m.ComponentModule)
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}