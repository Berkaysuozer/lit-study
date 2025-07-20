import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { getEmployees, deleteEmployee } from '../store/index.js';
import '../components/pagination.js';
import '../components/data-table.js';
import '../components/employee-card.js';
import '../components/view-toggle.js';

class EmployeeList extends LitElement {
  static properties = {
    employees: { type: Array },
    currentPage: { type: Number },
    itemsPerPage: { type: Number },
    totalPages: { type: Number },
    currentView: { type: String }
  };

  constructor() {
    super();
    this.employees = getEmployees();
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = Math.ceil(this.employees.length / this.itemsPerPage);
    this.currentView = localStorage.getItem('viewToggle') || 'table';
  }

  handleViewChange(e) {
    this.currentView = e.detail.view;
  }

  handleEdit(e) {
    const employee = e.detail.employee;
    Router.go(`/employees/edit?id=${employee.id}`);
  }

  handleDelete(e) {
    const employee = e.detail.employee;
    
    this.showConfirmModal({
      title: 'Delete Employee',
      message: `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`
    }, (confirmed) => {
      if (confirmed) {
        deleteEmployee(employee.id);
        this.employees = getEmployees();
        this.totalPages = Math.ceil(this.employees.length / this.itemsPerPage);
      }
    });
  }

  showConfirmModal(options, callback) {
    const modal = this.shadowRoot.querySelector('confirm-modal');
    modal.open(options, callback);
  }

  getCurrentPageEmployees() {
    const reversedEmployees = [...this.employees].reverse();
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return reversedEmployees.slice(startIndex, endIndex);
  }

  handlePageChange(e) {
    this.currentPage = e.detail.page;
  }

  render() {
    const currentEmployees = this.getCurrentPageEmployees();
    
    return html`
      <div class="page-header">
        <view-toggle .currentView=${this.currentView} @view-changed=${this.handleViewChange}></view-toggle>
      </div>
      
      <div class="table-view ${this.currentView === 'table' ? 'active' : ''}">
        <data-table 
          .data=${currentEmployees}
          @edit-item=${this.handleEdit}
          @delete-item=${this.handleDelete}
        ></data-table>
      </div>
      
      <div class="card-view ${this.currentView === 'card' ? 'active' : ''}">
        <div class="cards-container">
          ${currentEmployees.map(emp => html`
            <employee-card 
              .employee=${emp}
              @edit-employee=${this.handleEdit}
              @delete-employee=${this.handleDelete}
            ></employee-card>
          `)}
        </div>
      </div>
      
      <app-pagination 
        .currentPage=${this.currentPage}
        .totalPages=${this.totalPages}
        .itemsPerPage=${this.itemsPerPage}
        .totalItems=${this.employees.length}
        @page-changed=${this.handlePageChange}
      ></app-pagination>
      
      <confirm-modal></confirm-modal>
    `;
  }


  static styles = css`
  :host {
    display: block;
    width: 100%;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  h2 {
    color: #2c3e50;
  }
  
  .page-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
  }
  
  .page-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
    margin: 0;
  }
  
  .table-view,
  .card-view {
    display: none;
  }
  
  .table-view.active,
  .card-view.active {
    display: block;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cards-container employee-card {
    width: 580px;
    margin: 10px;
  }
  
  /* 700px altında otomatik card view */
  @media (max-width: 700px) {
    .table-view {
      display: none !important;
    }
    
    .card-view {
      display: block !important;
    }
    
    .cards-container {
      justify-content: center;
    }
    
    .cards-container employee-card {
      width: 100%;
      max-width: 580px;
    }
    
    .page-header {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 15px;
    }
  }
`;
}

customElements.define('employee-list', EmployeeList);