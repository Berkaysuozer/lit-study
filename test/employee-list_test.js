import { expect, fixture, html } from '@open-wc/testing';
import '../src/pages/employee-list.js';
import '../src/components/data-table.js';

describe('EmployeeList', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<employee-list></employee-list>`);
  });

  it('renders with default state', () => {
    const container = element.shadowRoot.querySelector('.page-header');
    expect(container).to.exist;
  });

  it('shows table view by default', () => {
    const tableView = element.shadowRoot.querySelector('.table-view');
    expect(tableView.classList.contains('active')).to.be.true;
  });

  it('has pagination component', () => {
    const pagination = element.shadowRoot.querySelector('app-pagination');
    expect(pagination).to.exist;
  });

  it('has view toggle component', () => {
    const viewToggle = element.shadowRoot.querySelector('view-toggle');
    expect(viewToggle).to.exist;
  });
});

describe('DataTable Columns', () => {
  it('should render all expected columns', async () => {
    const element = await fixture(html`<data-table .data=${[]}></data-table>`);
    const ths = Array.from(element.shadowRoot.querySelectorAll('th')).map(th => th.textContent.trim());

    const expectedColumnCount = 9; // we have 9 columns it would be better to get this in a dynamic way

    expect(ths.length).to.equal(expectedColumnCount);
    expect(ths.every(th => th.length > 0)).to.be.true; 
  });
});

 