import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guard/login.guard';

const router: Route[] = [
  {
    path: 'home',
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'menu',
        component: AdminComponent
      },
      {
        path: 'solid_block',
        component: AdminComponent
      },
      {
        path: 'wood_work',
        component: AdminComponent
      },
      {
        path: 'slider',
        component: AdminComponent
      },
      {
        path: 'advantages',
        component: AdminComponent
      },
      {
        path: 'about_us',
        component: AdminComponent
      },
      {
        path: 'any_questions',
        component: AdminComponent
      },
      {
        path: 'price_list',
        component: AdminComponent
      },
      {
        path: 'contact',
        component: AdminComponent
      },
      {
        path: 'page404',
        component: AdminComponent
      },
      {
        path: 'footer',
        component: AdminComponent
      }
    ]
  },
  
  {
    path: 'admin',
    component: AdminComponent
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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
