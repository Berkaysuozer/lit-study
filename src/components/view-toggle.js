import { LitElement, html, css } from 'lit';

class ViewToggle extends LitElement {
  static properties = {
    currentView: { type: String }
  };

  constructor() {
    super();
    this.currentView = localStorage.getItem('viewToggle') || 'table';
  }

  updated(changedProperties) {
    if (changedProperties.has('currentView') && this.currentView) {
      localStorage.setItem('viewToggle', this.currentView);
    }
  }

  handleViewChange(view) {
    this.currentView = view;
    localStorage.setItem('viewToggle', view);
    this.dispatchEvent(new CustomEvent('view-changed', {
      detail: { view: this.currentView },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="view-toggle">
        <button 
          class="toggle-btn ${this.currentView === 'table' ? 'active' : ''}"
          @click=${() => this.handleViewChange('table')}
          title="Table View"
        >
          <iconify-icon icon="mdi:table"></iconify-icon>
        </button>
        
        <button 
          class="toggle-btn ${this.currentView === 'card' ? 'active' : ''}"
          @click=${() => this.handleViewChange('card')}
          title="Card View"
        >
          <iconify-icon icon="mdi:view-grid"></iconify-icon>
        </button>
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
  
  .view-toggle {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .toggle-btn:hover {
    background-color: rgba(243, 156, 18, 0.1);
  }
  
  .toggle-btn.active {
    background-color: var(--primary-color);
  }
  
  .toggle-btn.active iconify-icon {
    color: white;
  }
  
  .toggle-btn iconify-icon {
    font-size: 20px;
  }
`;
}

customElements.define('view-toggle', ViewToggle);

export default ViewToggle; 