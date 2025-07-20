import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { getCurrentLanguage, setLanguage } from '../localization.js';

class AppNavbar extends LitElement {
  
  constructor() {
    super();
    this.activeRoute = window.location.pathname;
    this.currentLang = getCurrentLanguage();
  }
  
  handleNavigation(path, e) {
    e.preventDefault();
    this.activeRoute = path;
    Router.go(path);
  }
  
  toggleLanguage() {
    const newLang = this.currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
    this.currentLang = getCurrentLanguage();
  }
  
  render() {
    return html`
      <div class="navbar">
        <div class="logo">
        <img src="/src/assets/ing-logo.png" class="logo-img" alt="ING Logo">
          <span class="logo-text">
            ING
          </span>
        </div>
        
        <div class="nav-right">
          <a href="/employees" 
             class="${this.activeRoute === '/employees' ? 'active' : ''}"
             @click="${(e) => this.handleNavigation('/employees', e)}">
            <iconify-icon icon="mdi:account-group"></iconify-icon> Employees
          </a>
          <button class="add-new-btn" @click="${(e) => this.handleNavigation('/employees/add', e)}">
            <iconify-icon icon="mdi:plus"></iconify-icon> Add New
          </button>
          
          <div class="language-selector" @click="${this.toggleLanguage}">
            <iconify-icon icon="emojione:flag-for-${this.currentLang === 'tr' ? 'turkey' : 'united-kingdom'}"></iconify-icon>
          </div>
        </div>
      </div>
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
  
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 60px;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-icon {
    font-size: 24px;
  }
  .logo-img {
    width: 30px;
  }
  
  .logo-text {
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
  }
  
  .nav-right a {
    text-decoration: none;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    margin: 0 10px;
    display: flex;
    align-items: center;
  }
  
  .nav-right a.active {
    color: var(--primary-color);
  }
  
  .nav-right iconify-icon {
    margin-right: 5px;
  }
  
  .nav-right {
    color: var(--primary-color);
    display: flex;
    align-items: center;
     margin-left: 15px;
  }
  
  
  .add-new-btn {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 4px;
    font-weight: 100;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .language-selector {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .language-selector iconify-icon {
    width: 34px;
    height: 34px;
    display : flex;
    align-items: center;
  }
`;
}

customElements.define('app-navbar', AppNavbar);

export default AppNavbar; 