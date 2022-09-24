import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'authorization/:param',
    component: AuthorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }