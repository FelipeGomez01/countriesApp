import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { SeeCountryComponent } from './country/see-country/see-country.component';

const routes: Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region', //Ruta del navegador para llegar al componente
        component: ByRegionComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: SeeCountryComponent
    },
    {
        path: '**', // se agregar para soportar una dirección no existen
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule
{

}