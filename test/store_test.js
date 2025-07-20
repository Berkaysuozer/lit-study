import { expect } from '@open-wc/testing';
import { getEmployees, addEmployee, editEmployee, deleteEmployee, resetToInitial } from '../src/store/index.js';

describe('Store Functions', () => {
  beforeEach(() => {
    resetToInitial();
  });

  it('should get initial employees', () => {
    const employees = getEmployees();
    expect(employees).to.be.an('array');
    expect(employees.length).to.be.greaterThan(0);
  });

  it('should add new employee', () => {
    const initialCount = getEmployees().length;
    const newEmployee = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '+905451111111',
      birthDate: '1990-01-01',
      employmentDate: '2020-01-01',
      department: 'Tech',
      position: 'Junior'
    };

    addEmployee(newEmployee);
    const employees = getEmployees();
    expect(employees.length).to.equal(initialCount + 1);
    expect(employees[employees.length - 1].firstName).to.equal('Test');
  });

  it('should edit existing employee', () => {
    const employees = getEmployees();
    const firstEmployee = employees[0];
    const updatedData = { firstName: 'Updated' };

    editEmployee(firstEmployee.id, updatedData);
    const updatedEmployees = getEmployees();
    const updatedEmployee = updatedEmployees.find(emp => emp.id === firstEmployee.id);

    expect(updatedEmployee.firstName).to.equal('Updated');
  });

  it('should delete employee', () => {
    const initialCount = getEmployees().length;
    const firstEmployee = getEmployees()[0];

    deleteEmployee(firstEmployee.id);
    const employees = getEmployees();
    expect(employees.length).to.equal(initialCount - 1);
    expect(employees.find(emp => emp.id === firstEmployee.id)).to.be.undefined;
  });
}); 