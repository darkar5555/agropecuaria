import { RouterModule, Routes, Router } from '@angular/router'
import { WebComponent } from './web.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { InsumosComponent } from './insumos/insumos.component';


const webRoutes: Routes = [

    { path: '',
      component: WebComponent,
      children: [
        { path: 'home',                     component: HomeComponent },
        { path: 'nosotros',                 component: NosotrosComponent },
        { path: 'medicamentos',             component: MedicamentosComponent },
        { path: 'alimentos-balanceados',    component: AlimentosComponent },
        { path: 'insumos',                  component: InsumosComponent },
        { path: '',    redirectTo:'/home', pathMatch: 'full' }
      ]

    }

];

export const WEB_ROUTES = RouterModule.forChild(webRoutes);