import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee = {
    name: '',
    position: '',
    level: 'junior',
  };
  employeeId: string = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del empleado de la URL
    this.route.params.subscribe((params) => {
      this.employeeId = params['id'];
      // Cargar los datos del empleado para editar
      this.loadEmployeeData();
    });
  }

  loadEmployeeData() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (employee) => {
        // Al recibir los datos del empleado, asignarlos a la propiedad "employee"
        this.employee = employee;
      },
      (error) => {
        console.error('Error al cargar los datos del empleado:', error);
      }
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(
      () => {
        // El empleado se ha actualizado correctamente, redirigir a la lista de empleados
        this.router.navigate(['/employees']);
      },
      (error) => {
        console.error('Error al actualizar el empleado:', error);
      }
    );
  }
}
