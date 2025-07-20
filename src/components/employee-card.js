import { LitElement, html, css } from 'lit';
import { t } from '../localization.js';
import { formatDate, formatPhone } from '../utils/formatters.js';

class EmployeeCard extends LitElement {

  static properties = {
    employee: { type: Object }
  };

  constructor() {
    super();
    this.employee = {};
  }

  handleEdit() {
    this.dispatchEvent(new CustomEvent('edit-employee', {
      detail: { employee: this.employee },
      bubbles: true,
      composed: true
    }));
  }

  handleDelete() {
    this.dispatchEvent(new CustomEvent('delete-employee', {
      detail: { employee: this.employee },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const emp = this.employee;
    
    return html`
      <div class="card">
        <div class="card-content">
          <div class="info-group">
            <div class="info-item">
              <p class="info-label">${t('firstName')}:</p>
              <p class="info-value">${emp.firstName || ''}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${t('employmentDate')}:</p>
              <p class="info-value">${formatDate(emp.employmentDate) || ''}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${t('phone')}:</p>
              <p class="info-value">${formatPhone(emp.phone) || ''}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${t('department')}:</p>
              <p class="info-value">${emp.department || ''}</p>
            </div>
          </div>
          
          <div class="info-group">
            <div class="info-item">
              <p class="info-label">${t('lastName')}:</p>
              <p class="info-value">${emp.lastName || ''}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${t('birthDate')}:</p>
              <p class="info-value">${formatDate(emp.birthDate) || ''}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${t('email')}:</p>
              <p class="info-value">${emp.email || ''}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${t('position')}:</p>
              <p class="info-value">${emp.position || ''}</p>
            </div>
          </div>
        </div>
        
        <div class="card-actions">
          <button class="action-btn edit-btn" @click=${this.handleEdit}>
            <iconify-icon icon="mdi:pencil"></iconify-icon>
            ${t('edit')}
          </button>
          <button class="action-btn delete-btn" @click=${this.handleDelete}>
            <iconify-icon icon="mdi:delete"></iconify-icon>
            ${t('delete')}
          </button>
        </div>
      </div>
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
  
  .card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: box-shadow 0.3s;
  }
  
  .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .card-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  
  .info-group {
    display: flex;
    flex-direction: column;
    width: 48%;
  }

  .info-item {
    display: block;
  }
  
  .info-label {
    font-weight: 600;
    color: gray;
    font-size: 14px;
  }
  
  .info-value {
    font-weight: 600;
    font-size: 15px;
  }
  
  .card-actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .card-actions > * {
    margin-left: 10px;
  }
  
  .card-actions > *:first-child {
    margin-left: 0;
  }
  
  .action-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: all 0.3s;
  }
  
  .edit-btn {
    background-color: #525099;
    color: white;
  }
  
  .delete-btn {
    background-color: #FF6006;
    color: white;
  }
  
  .action-btn iconify-icon {
    color: white;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    .info-group {
      width: 100%;
    }
  }
`;
}

customElements.define('employee-card', EmployeeCard);

export default EmployeeCard; 