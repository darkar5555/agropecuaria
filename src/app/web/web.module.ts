import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WebComponent } from "./web.component";
import { WEB_ROUTES } from "./web.routes";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { InsumosComponent } from './insumos/insumos.component';
import { HomeComponent } from './home/home.component';

//Angular Material
import { MaterialModule } from "../material/material.module";
import { NosotrosComponent } from './nosotros/nosotros.component';

//ngx-boostrap
import { CarouselModule } from "ngx-bootstrap/carousel"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({

    declarations: [
        WebComponent,
        HeaderComponent,
        FooterComponent,
        MedicamentosComponent,
        AlimentosComponent,
        InsumosComponent,
        HomeComponent,
        NosotrosComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        WEB_ROUTES,
        MaterialModule,
        CarouselModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports:[
        WebComponent
    ]
})

export class WebModule{}