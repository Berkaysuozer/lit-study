import { expect, fixture, html } from '@open-wc/testing';
import '../src/components/navbar.js';

describe('Navbar', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<app-navbar></app-navbar>`);
  });

  it('should render navbar with logo and navigation', () => {
    const logo = element.shadowRoot.querySelector('.logo');
    const navRight = element.shadowRoot.querySelector('.nav-right');
    
    expect(logo).to.exist;
    expect(navRight).to.exist;
  });

  it('should have employees link', () => {
    const employeesLink = element.shadowRoot.querySelector('a[href="/employees"]');
    expect(employeesLink).to.exist;
  });

  it('should have add new button', () => {
    const addButton = element.shadowRoot.querySelector('.add-new-btn');
    expect(addButton).to.exist;
  });

  it('should have language selector', () => {
    const langSelector = element.shadowRoot.querySelector('.language-selector');
    expect(langSelector).to.exist;
  });

  it('should handle language toggle', () => {
    const langSelector = element.shadowRoot.querySelector('.language-selector');
    const initialLang = element.currentLang;
    
    langSelector.click();
    
    expect(element.currentLang).to.not.equal(initialLang);
  });

  it('should handle navigation to employees page', () => {
    const employeesLink = element.shadowRoot.querySelector('a[href="/employees"]');
    const clickEvent = new Event('click');
    
    employeesLink.dispatchEvent(clickEvent);
    
    expect(element.activeRoute).to.equal('/employees');
  });

  it('should handle navigation to add employee page', () => {
    const addButton = element.shadowRoot.querySelector('.add-new-btn');
    const clickEvent = new Event('click');
    
    addButton.dispatchEvent(clickEvent);
    
    expect(element.activeRoute).to.equal('/employees/add');
  });
}); 