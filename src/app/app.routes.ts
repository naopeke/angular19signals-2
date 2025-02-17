import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ResourceDemoComponent } from './resource-demo/resource-demo.component';
import { LinkedSignalDemoComponent } from './linked-signal-demo/linked-signal-demo.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'lessons',
        component: LessonsComponent,
    },
    {
        path: 'shopping-cart',
        component: LinkedSignalDemoComponent,
    },
    {
        path: 'resourse-demo',
        component: ResourceDemoComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
