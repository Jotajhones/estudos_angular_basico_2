import { Routes } from '@angular/router';
import { Main } from './layouts/main/main';
import { authGuard } from './core/services/auth-guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login' ,pathMatch: 'full' 
    },
    {
        path: 'login', 
        loadComponent: () => import('./features/login-page/login-page').then(m => m.LoginPage)
    },
    {
        path: '',
        component: Main,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./features/home-page/home-page').then(m => m.HomePage),
                canActivate: [authGuard]

            }
        ]
    }
];
