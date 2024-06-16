import { Routes } from '@angular/router';

export const routes: Routes = [
 { path: '', loadComponent: ()=> import('./main/main.page').then(m => m.MainPage)},
 { path: 'shops', loadComponent: ()=> import('./views/shops/shops.component').then(m => m.ShopsComponent)}
];
