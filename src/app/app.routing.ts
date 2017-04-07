import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members/:id/admin',
    component: MemberDetailComponent
  },
  {
    path: 'members/admin',
    component: MemberListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
