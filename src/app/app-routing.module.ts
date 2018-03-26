import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TestComponetDetailComponent } from './test-componet-detail/test-componet-detail.component';

const routes: Routes = [
  { path: 'testComponent', component: TestComponentComponent },
  { path: 'detail/:id', component: TestComponetDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
