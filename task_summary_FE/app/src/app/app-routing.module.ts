import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatfactComponent } from './catfact/catfact.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  { path: 'app/catfact', component: CatfactComponent },
  { path: 'app/activity', component: ActivityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }