import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'menu',
        component: HeaderComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
