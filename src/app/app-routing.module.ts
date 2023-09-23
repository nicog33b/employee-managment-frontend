import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeTableComponent }, //vista de empleados
  { path: 'addEmployee', component: EmployeeCreateComponent}, //agregar
  { path: 'editEmployee/:id', component: EmployeeEditComponent } //editar

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
