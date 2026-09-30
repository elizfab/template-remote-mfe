import { Routes } from '@angular/router';

// Modo standalone: reaproveita exatamente as rotas expostas ao shell.
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
];
