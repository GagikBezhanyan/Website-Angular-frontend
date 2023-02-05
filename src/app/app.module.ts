import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LoginGuardService } from './service/login.guard.service';
const router: Route[] = [
  {
    path: 'home',
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: 'admin/login', 
    component: AdminComponent, 
    canActivate: [LoginGuardService]
  },
  {
    path: 'admin',
    loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryModule)
  },
  {
    path: 'prices',
    loadChildren: () => import('./pages/prices/prices.module').then( m => m.PricesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404Module)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
