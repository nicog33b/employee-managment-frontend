import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'; 
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

deleteEmployee(_id: string | undefined) {
  if (_id) {
    this.employeeService.deleteEmployee(_id).subscribe(() => {
      console.log('Empleado eliminado con éxito');
      // Encuentra el índice del empleado en this.employees
      const index = this.employees.findIndex((employee) => employee._id === _id);
      // Elimina el empleado localmente
      if (index !== -1) {
        this.employees.splice(index, 1);
      }
    }, (error) => {
      console.error('Error al eliminar empleado:', error);
    });
  }
}

  


}

