import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = environment.baseURL; // Reemplaza esto con la URL de tu servidor backend
  private employees$: Subject<Employee[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  // Método para obtener todos los empleados
  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  // Método para obtener un empleado por su ID
  getEmployeeById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  // Método para agregar un nuevo empleado (POST)
  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseUrl}`, employee);
  }

  // Método para actualizar un empleado por su ID (PUT)
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  // Método para eliminar un empleado por su ID (DELETE)
  deleteEmployee(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
