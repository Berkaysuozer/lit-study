import { initialEmployees } from '../constants.js';

const STORAGE_KEY = 'ing_employees';

function getStoredEmployees() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialEmployees;
}

let employees = getStoredEmployees();

export function getEmployees() {
  return employees;
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

export function addEmployee(employee) {
  const maxId = Math.max(...employees.map(emp => emp.id), 0);
  employee.id = maxId + 1;
  
  employees = [...employees, employee];
  saveToStorage();
}

export function editEmployee(id, updatedEmployee) {
  employees = employees.map(emp => emp.id === id ? { ...emp, ...updatedEmployee } : emp);
  saveToStorage();
}

export function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  saveToStorage();
}

export function resetToInitial() {
  employees = [...initialEmployees];
  saveToStorage();
}
