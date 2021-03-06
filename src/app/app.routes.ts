import { RouterModule,Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NoPagefoundComponent } from './shared/no-pagefound/no-pagefound.component';
import { PagesComponent } from './pages/pages.component';



const appRoutes: Routes =[
    {
       path:'',
       component:PagesComponent,
       children:[
        {path:'dashboard',component:LoginComponent},
        {path:'progress',component:ProgressComponent},
        {path:'graficas1',component:Graficas1Component}
       ]
    },
   {path:'login',component:LoginComponent},
   {path:'register',component:LoginComponent},
   //{path:'', redirectTo:'/dashboard',pathMatch:'full'}, 
   {path:'**', component: NoPagefoundComponent}
];

export const APP_ROUTES =RouterModule.forRoot(appRoutes,{useHash: true});




