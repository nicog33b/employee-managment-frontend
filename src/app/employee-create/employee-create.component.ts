import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function lettersOnlyValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = /^[a-zA-Z]+$/.test(control.value);
  return valid ? null : { 'lettersOnly': true };
}

function minLengthValidator(minLength: number) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.length < minLength) {
      return { 'minLength': { requiredLength: minLength, actualLength: control.value.length } };
    }
    return null;
  };
}

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent {
  newEmployee: Employee = {
    name: '',
    position: '',
    level: 'junior',
  };

    // Agrega un objeto para manejar los errores
    formErrors: any = {
      name: 'Solo puedes usar letras y debe contener más de 3 caracteres',
      position: 'Solo puedes usar letras y debe contener más de 3 caracteres',
    };
  

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(
      (employee) => {
        // El empleado se ha agregado correctamente, puedes realizar acciones adicionales si es necesario.
        console.log('Empleado agregado:', employee);
        // Limpia los campos del formulario o realiza otras acciones después del éxito.
        this.newEmployee = {
          name: '',
          position: '',
          level: 'junior',
        };
      },
      (error) => {
        // Maneja errores si ocurre alguno.
        console.error('Error al agregar el empleado:', error);
      }
    );
  }











  
}