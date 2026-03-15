import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { References } from './references';

const routes: Routes = [
  {
    path: '',
    component: References,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferencesRoutingModule {}
