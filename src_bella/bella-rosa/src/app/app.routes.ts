import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'commercial',
    loadComponent: () => import('./pages/commercial.component').then(m => m.CommercialComponent)
  },
  {
    path: 'commercial/about-us',
    loadComponent: () => import('./pages/commercial-about.component').then(m => m.CommercialAboutComponent)
  },
  {
    path: 'commercial/rates',
    loadComponent: () => import('./pages/commercial-rates.component').then(m => m.CommercialRatesComponent)
  },
  {
    path: 'commercial/gallery',
    loadComponent: () => import('./pages/commercial-gallery.component').then(m => m.CommercialGalleryComponent)
  },
  {
    path: 'commercial/contact-info',
    loadComponent: () => import('./pages/commercial-contact.component').then(m => m.CommercialContactComponent)
  },
  {
    path: 'residential',
    loadComponent: () => import('./pages/residential.component').then(m => m.ResidentialComponent)
  },
  {
    path: 'residential/about-us',
    loadComponent: () => import('./pages/residential-about.component').then(m => m.ResidentialAboutComponent)
  },
  {
    path: 'residential/gallery',
    loadComponent: () => import('./pages/residential-gallery.component').then(m => m.ResidentialGalleryComponent)
  },
  {
    path: 'residential/contact-info',
    loadComponent: () => import('./pages/residential-contact.component').then(m => m.ResidentialContactComponent)
  },
  { path: '**', redirectTo: '' }
];
