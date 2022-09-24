import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from "../components/components.module";
import { CommonService } from "../services/common.service";
import { IndexComponent } from "./index/index.component";

@NgModule({
    imports: [
        ComponentsModule,
        BrowserModule,
        MatDialogModule
    ],
    declarations: [IndexComponent],
    providers: [CommonService],
    exports: [IndexComponent]
})
export class PagesModule {}