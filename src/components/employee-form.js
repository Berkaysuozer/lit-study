import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { t } from '../localization.js';
import { getEmployees, addEmployee, editEmployee } from '../store/index.js';
import { formatDateForInput } from '../utils/formatters.js';
import { validateEmployeeForm } from '../utils/vee-validation.js';
import ConfirmModal from './confirm-modal.js';

class EmployeeForm extends LitElement {

  static properties = {
    employee: { type: Object },
    isEditing: { type: Boolean },
    errors: { type: Object }
  };

  constructor() {
    super();
    this.employee = null;
    this.isEditing = false;
    this.errors = {};
    this.formData = {
      firstName: '',
      lastName: '',
      employmentDate: '',
      birthDate: '',
      phone: '',
      email: '',
      department: '',
      position: ''
    };
  }


  connectedCallback() {
    super.connectedCallback();
    this.loadEmployeeFromUrl();
  }

  loadEmployeeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeId = urlParams.get('id');
    
    if (employeeId) {
      const employees = getEmployees();
      const employee = employees.find(emp => emp.id === parseInt(employeeId));
      
      if (employee) {
        this.employee = employee;
        this.isEditing = true;
        this.formData = { 
          ...employee,
          birthDate: formatDateForInput(employee.birthDate),
          employmentDate: formatDateForInput(employee.employmentDate)
        };
      }
    }
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.formData[name] = value;
    
    const fieldErrors = validateEmployeeForm(this.formData);
    this.errors = { ...this.errors, [name]: fieldErrors[name] || '' };
    this.requestUpdate();
  }

  validateForm() {
    this.errors = validateEmployeeForm(this.formData);
    return Object.keys(this.errors).length === 0;
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }
    
    const formDataForStorage = {
      ...this.formData,
      birthDate: formatDateForInput(this.formData.birthDate),
      employmentDate: formatDateForInput(this.formData.employmentDate)
    };
    
    if (this.isEditing) {
      this.showConfirmModal({
        title: 'Update Employee',
        message: 'Are you sure you want to update this employee?'
      }, (confirmed) => {
        if (confirmed) {
          editEmployee(this.employee.id, formDataForStorage);
          Router.go('/employees');
        }
      });
    } else {
      addEmployee(formDataForStorage);
      Router.go('/employees');
    }
  }

  showConfirmModal(options, callback) {
    const modal = this.shadowRoot.querySelector('confirm-modal');
    if (modal) {
      modal.open(options, callback);
    }
  }

  handleCancel() {
    Router.go('/employees');
  }

  render() {
    const title = this.isEditing ? 'Edit Employee' : 'Add Employee';
    
    return html`
      <div class="form-container">
        <div class="form-header">
          <h2 class="form-title">${title}</h2>
        </div>
        
        <form @submit=${this.handleSubmit}>
          <div class="form-layout">
            <div class="form-row">
              <label class="form-label">${t('firstName')}</label>
              <input 
                type="text" 
                name="firstName" 
                class="form-input ${this.errors.firstName ? 'error' : ''}" 
                .value=${this.formData.firstName}
                @input=${this.handleInputChange}
                required
              >
              ${this.errors.firstName ? html`<div class="error-message">${this.errors.firstName}</div>` : ''}
            </div>
            
            <div class="form-row">
              <label class="form-label">${t('lastName')}</label>
              <input 
                type="text" 
                name="lastName" 
                class="form-input ${this.errors.lastName ? 'error' : ''}" 
                .value=${this.formData.lastName}
                @input=${this.handleInputChange}
                required
              >
              ${this.errors.lastName ? html`<div class="error-message">${this.errors.lastName}</div>` : ''}
            </div>
            
            <div class="form-row">
              <label class="form-label">${t('birthDate')}</label>
              <div class="input-wrapper">
                <input 
                  type="date" 
                  name="birthDate" 
                  class="form-input ${this.errors.birthDate ? 'error' : ''}" 
                  .value=${this.formData.birthDate}
                  @input=${this.handleInputChange}
                  required
                >
              </div>
              ${this.errors.birthDate ? html`<div class="error-message">${this.errors.birthDate}</div>` : ''}
            </div>
            
            <div class="form-row">
              <label class="form-label">${t('phone')}</label>
              <input 
                type="tel" 
                name="phone" 
                class="form-input ${this.errors.phone ? 'error' : ''}" 
                .value=${this.formData.phone}
                @input=${this.handleInputChange}
                placeholder="+905451111111"
                required
              >
              ${this.errors.phone ? html`<div class="error-message">${this.errors.phone}</div>` : ''}
            </div>
            
            <div class="form-row">
              <label class="form-label">${t('department')}</label>
              <select 
                name="department" 
                class="form-select ${this.errors.department ? 'error' : ''}" 
                .value=${this.formData.department}
                @change=${this.handleInputChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Analytics">Analytics</option>
                <option value="Tech">Tech</option>
              </select>
              ${this.errors.department ? html`<div class="error-message">${this.errors.department}</div>` : ''}
            </div>
            
            <div class="form-row">
              <label class="form-label">${t('position')}</label>
              <select 
                name="position" 
                class="form-select ${this.errors.position ? 'error' : ''}" 
                .value=${this.formData.position}
                @change=${this.handleInputChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Junior">Junior</option>
                <option value="Medior">Medior</option>
                <option value="Senior">Senior</option>
              </select>
              ${this.errors.position ? html`<div class="error-message">${this.errors.position}</div>` : ''}
            </div>
          </div>
          
          <div class="form-row full-width">
            <div class="form-layout">
              <div class="form-row">
                <label class="form-label">${t('employmentDate')}</label>
                <div class="input-wrapper">
                  <input 
                    type="date" 
                    name="employmentDate" 
                    class="form-input ${this.errors.employmentDate ? 'error' : ''}" 
                    .value=${this.formData.employmentDate}
                    @input=${this.handleInputChange}
                    required
                  >
                </div>
                ${this.errors.employmentDate ? html`<div class="error-message">${this.errors.employmentDate}</div>` : ''}
              </div>
              
              <div class="form-row">
                <label class="form-label">${t('email')}</label>
                <input 
                  type="email" 
                  name="email" 
                  class="form-input ${this.errors.email ? 'error' : ''}" 
                  .value=${this.formData.email}
                  @input=${this.handleInputChange}
                  required
                >
                ${this.errors.email ? html`<div class="error-message">${this.errors.email}</div>` : ''}
              </div>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" @click=${this.handleCancel}>
              <iconify-icon icon="mdi:close"></iconify-icon>
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              <iconify-icon icon="mdi:content-save"></iconify-icon>
              ${this.isEditing ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
      
      <confirm-modal></confirm-modal>
    `;
  }
  
  static styles = css`
  :host {
    display: block;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  .form-container {
    background: white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
  }
  
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  
  .form-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
    margin: 0;
  }
  
  .form-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  
  .form-row {
    display: flex;
    flex-direction: column;
    width: 48%;
  }
  
  .form-row.full-width {
    width: 100%;
  }
  
  .form-row.full-width  {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  
  .form-label {
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
    font-size: 14px;
  }
  
  .form-input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  
  .form-input.error {
    border-color: #e74c3c;
  }
  
  .form-select {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background: white;
    cursor: pointer;
  }
  
  .form-select:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  
  .form-select.error {
    border-color: #e74c3c;
  }
  
  .input-wrapper {
    width: 94%;
    position: relative;
  }
  input {
    width: 94%;
  }

  input[type="date"] {
    width: 100%;
  }

  .error-message {
    color: #e74c3c;
    font-size: 12px;
    margin-top: 4px;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .form-actions > * {
    margin-left: 15px;
  }
  
  .form-actions > *:first-child {
    margin-left: 0;
  }
  
  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
  }
  
  .btn iconify-icon {
    margin-right: 8px;
  }
  
  .btn-primary {
    background-color: var(--primary-color);
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #e67e22;
  }
  
  .btn-secondary {
    background-color: white;
    color: #007bff;
    border: 1px solid #007bff;
  }
  
  .btn-secondary:hover {
    background-color: #f8f9fa;
  }
  
  @media (max-width: 768px) {
    .form-row {
      width: 100%;
    }
    
    .form-actions {
      flex-direction: column;
    }
  }
`;
}

customElements.define('employee-form', EmployeeForm);

export default EmployeeForm; 