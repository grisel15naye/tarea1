import { Routes } from '@angular/router';
import { Practica1Component } from './practica1/practica1.component';
import { Practica2Component } from './practica2/practica2.component';
import { Practica3Component } from './practica3/practica3.component';
import { Practica4Component } from './practica4/practica4.component';

export const routes: Routes = [
    {path: "a1", component: Practica1Component},
    {path: "a2", component: Practica2Component},
    {path: "a3", component: Practica3Component},
    {path: "a4", component: Practica4Component}
];

