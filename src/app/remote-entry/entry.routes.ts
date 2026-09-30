import { Route } from '@angular/router';
import { Home } from './home';

// Contrato com o shell do MFE: o remote expõe estas rotas como './Routes' (webpack.config.js).
// Dentro do shell elas ficam sob a rota do remote (ex.: /exemplo); standalone, sob '/'.
// Regras: redirects e links RELATIVOS, sem rota '**' (o curinga é do shell).
export const remoteRoutes: Route[] = [
  {
    path: '',
    providers: [
      // providers da feature (provideHttpClient, provideState...) — o app.config.ts NÃO roda dentro do shell
    ],
    children: [{ path: '', component: Home, title: 'Exemplo' }],
  },
];
