import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'list', component: ListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
