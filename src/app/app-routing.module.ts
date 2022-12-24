import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnapHomeComponent } from './snap-home/snap-home.component';

const routes: Routes = [
  {path:'',component:SnapHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
