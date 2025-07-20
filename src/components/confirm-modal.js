import { LitElement, html, css } from 'lit';

class ConfirmModal extends LitElement {
  static properties = {
    isOpen: { type: Boolean },
    title: { type: String },
    message: { type: String },
    confirmed: { type: Boolean }
  };

  constructor() {
    super();
    this.isOpen = false;
    this.title = 'Confirm';
    this.message = 'Are you sure?';
    this.confirmed = false;
  }

  open(options = {}, callback) {
    this.title = options.title || this.title;
    this.message = options.message || this.message;
    this.isOpen = true;
    this.confirmed = false;
    this.callback = callback;
  }

  close() {
    this.isOpen = false;
  }

  confirm() {
    this.confirmed = true;
    this.callback(true);
    this.close();
  }

  cancel() {
    this.confirmed = false;
    this.callback(false);
    this.close();
  }

  render() {
    if (!this.isOpen) return html``;
    
    return html`
      <div class="overlay" @click=${this.cancel}>
        <div class="modal">
          <h3>${this.title}</h3>
          <p>${this.message}</p>
          <div class="buttons">
            <button class="btn btn-cancel" @click=${this.cancel}>Cancel</button>
            <button class="btn btn-confirm" @click=${this.confirm}>Confirm</button>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    
    .modal {
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 300px;
      text-align: center;
    }
    
      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .btn-cancel {
       background: #f0f0f0; 
     }
       
    .btn-confirm {
       background: #f39c12; color: white; 
     }
  `;
}

customElements.define('confirm-modal', ConfirmModal);
export default ConfirmModal; 