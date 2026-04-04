import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Connection } from './features/pages/connection/connection';
import { Evenement } from './features/pages/evenement/evenement';
import { Profile } from './features/pages/profile/profile';
import { CreateEvent } from './features/pages/create-event/create-event';

export const routes: Routes = [
{
    path:'home',
    component:Home
},

{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},

{
    path:"connection",
    component: Connection
},

{
    path:"evenement",
    component: Evenement
},
{
    path:"evenement/create",
    component: CreateEvent
},

{
    path:'profile',
    component: Profile
},

{
    path:'**',
    loadComponent: () => import("./features/errors/not-found/not-found")
        .then(c => c.NotFound)
}

];
