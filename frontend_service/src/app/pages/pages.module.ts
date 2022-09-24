import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

import { ComponentsModule } from "../components/components.module";
import { CommonService } from "../services/common.service";
import { IndexComponent } from "./index/index.component";
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserService } from "../services/user.service";
import { TokenService } from "../services/token.service";

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
        RouterModule,
        MatDialogModule,
        MatCheckboxModule
    ],
    declarations: [
        IndexComponent, 
        AuthorizationComponent,
    ],
    providers: [
        CommonService,
        UserService,
        TokenService
    ],
    exports: [IndexComponent]
})
export class PagesModule { }