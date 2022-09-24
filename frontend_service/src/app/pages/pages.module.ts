import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { CommonService } from "../services/common.service";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { IndexComponent } from "./index/index.component";
import { AuthorizationComponent } from './authorization/authorization.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    imports: [
        BrowserModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        RouterModule
    ],
    declarations: [IndexComponent, AuthorizationComponent],
    providers: [CommonService],
    exports: [IndexComponent]
})
export class PagesModule { }