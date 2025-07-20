import { LitElement, html, css } from 'lit';
import './components/navbar.js';
import './pages/employee-list.js';
import './components/employee-form.js';
import { initRouter } from './router/router.js';
import './localization.js';

class App extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      --primary-color: #f39c12;
    }
    
    iconify-icon {
      color: var(--primary-color);
    }
    
    .app-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .content {
      margin-top: 20px;
      width: 100%;
      max-width: 1600px;
    }
  `;
  
  firstUpdated() {
    const container = this.shadowRoot.querySelector('.content');
    initRouter(container);
  }
  
  render() {
    return html`
      <div class="app-container">
        <app-navbar></app-navbar>
        
        <div class="content">
          <!-- Router container -->
        </div>
      </div>
    `;
  }
}

customElements.define('ing-hub-app', App);