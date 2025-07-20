import { Router } from '@vaadin/router';

let router;

export function initRouter(container) {
  router = new Router(container);
  
  router.setRoutes([
    { path: '/', redirect: '/employees' },
    { path: '/employees', component: 'employee-list' },
    { path: '/employees/add', component: 'employee-form' },
    { path: '/employees/edit', component: 'employee-form' },
  ]);
  
  return router;
}

export { router };
