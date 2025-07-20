import { LitElement, html, css } from 'lit';

class Pagination extends LitElement {

  static properties = {
    currentPage: { type: Number },
    totalPages: { type: Number },
    itemsPerPage: { type: Number },
    totalItems: { type: Number }
  };

  constructor() {
    super();
    this.currentPage = 1;
    this.totalPages = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
  }

  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.dispatchEvent(new CustomEvent('page-changed', {
        detail: { page: this.currentPage },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    const maxVisiblePages = Math.min(5, this.totalPages);
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    const pageButtons = [];
    
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(html`
        <button 
          class=${i === this.currentPage ? 'active' : ''}
          @click=${() => this.goToPage(i)}
        >
          ${i}
        </button>
      `);
    }

    return html`
      <div class="pagination">
        <button 
          ?disabled=${this.currentPage === 1}
          @click=${() => this.goToPage(this.currentPage - 1)}
        >
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        
        ${pageButtons}
        
        <button 
          ?disabled=${this.currentPage === this.totalPages}
          @click=${() => this.goToPage(this.currentPage + 1)}
        >
          <iconify-icon icon="mdi:chevron-right"></iconify-icon>
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
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
  
  
  .pagination button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: white;
    cursor: pointer;
    border-radius: 50%;
    border: 0px;
  }
  
  .pagination button:disabled iconify-icon {
    color: #ccc;
  }
  
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .pagination .active {
    background: var(--primary-color);
    color: white;
  }
  
  .pagination .active iconify-icon {
    color: white;
  }
`;
}

customElements.define('app-pagination', Pagination);

export default Pagination; 