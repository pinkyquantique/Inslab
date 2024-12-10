import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './auth-module/authlayout/authlayout.component';
import path from 'path';
import { AuthModule } from '../app/auth-module/auth-module.module';
import { ComponentlayoutComponent } from './component/componentlayout/componentlayout.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [ 
     { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    {
      path: 'auth',
      component: AuthlayoutComponent,
       loadChildren: () => import('../app/auth-module/auth-module.module').then(m => m.AuthModule)
     
    },
    {
      path: 'pages',
      component: ComponentlayoutComponent,
      loadChildren: () => import('../app/component/component.module').then(m => m.ComponentModule)
    },
    { path: '**', component: NotFoundComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}