import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackFutureComponent } from './modules/back-future/back-future.component';

const routes: Routes = [
  {
    path:"future",
    component: BackFutureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
