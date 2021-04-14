import {Link1Component} from './link1/link1.component';
import {Routes} from '@angular/router';
import {ProductosComponent} from './productos/productos.component';

export const appRoutes : Routes=[
    {path:'link1', component:Link1Component},
    {path :'productos',component:ProductosComponent},
];