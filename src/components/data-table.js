import { LitElement, html, css } from 'lit';
import { t } from '../localization.js';
import { formatDate, formatPhone } from '../utils/formatters.js';

class DataTable extends LitElement {

  static properties = {
    data: { type: Array }
  };

  constructor() {
    super();
    this.data = [];
  }

  handleEdit(item) {
    this.dispatchEvent(new CustomEvent('edit-item', {
      detail: { employee: item },
    }));
  }

  handleDelete(item) {
    this.dispatchEvent(new CustomEvent('delete-item', {
      detail: { employee: item },
    }));
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>${t('firstName')}</th>
            <th>${t('lastName')}</th>
            <th>${t('employmentDate')}</th>
            <th>${t('birthDate')}</th>
            <th>${t('phone')}</th>
            <th>${t('email')}</th>
            <th>${t('department')}</th>
            <th>${t('position')}</th>
            <th>${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${this.data.map(item => html`
            <tr>
              <td data-label="${t('firstName')}">${item.firstName}</td>
              <td data-label="${t('lastName')}">${item.lastName}</td>
              <td data-label="${t('employmentDate')}">${formatDate(item.employmentDate)}</td>
              <td data-label="${t('birthDate')}">${formatDate(item.birthDate)}</td>
              <td data-label="${t('phone')}">${formatPhone(item.phone)}</td>
              <td data-label="${t('email')}">${item.email}</td>
              <td data-label="${t('department')}">${item.department}</td>
              <td data-label="${t('position')}">${item.position}</td>
              <td data-label="${t('actions')}">
                <div class="actions">
                  <span class="edit-icon" @click=${() => this.handleEdit(item)}>
                    <iconify-icon icon="mdi:pencil"></iconify-icon>
                  </span>
                  <span class="delete-icon" @click=${() => this.handleDelete(item)}>
                    <iconify-icon icon="mdi:delete"></iconify-icon>
                  </span>
                </div>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
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
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;
    overflow-x: auto;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 5px;
  }
  
  th, td {
    padding: 20px;
    text-align: left;
    white-space: nowrap;
    background: white;
    border: none;
  }
  
  th {
    border: none;
    color: var(--primary-color);
  }
  
  tr {
    border-top: 0.5px solid lightgray;
    padding: 20px;
  }
  
  tr:first-child {
    border-top: none;
  }
  
  tbody tr:first-child {
    border-top: 0.5px solid lightgray;
  }
  
  .actions {
    display: flex;
    justify-content: center;
     margin-left: 0.5rem;
  }
  
  .edit-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .edit-icon iconify-icon {
    font-size: 20px;
  }
  
  .delete-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .delete-icon iconify-icon {
    font-size: 20px;
  }
  
  @media (max-width: 700px) {
    table, thead, tbody, th, td, tr {
      display: block;
    }
    
    thead tr {
      display: none;
    }
    
    tr {
      margin-bottom: 1rem;
      border-bottom: 2px solid #eee;
    }
    
    td {
      border: none;
      position: relative;
      padding-left: 50%;
      min-height: 2.5em;
    }
    
    td:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 45%;
      white-space: nowrap;
      font-weight: bold;
      padding-left: 0.5rem;
      content: attr(data-label);
    }
  }
`;
}

customElements.define('data-table', DataTable);

export default DataTable; 