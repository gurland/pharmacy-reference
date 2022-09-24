import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';

import { SearchModalComponent } from "./navbar/search-modal/search-modal.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { InfoCardComponent } from "./info-card/info-card.component";
import { RouterModule } from "@angular/router";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { CardModalComponent } from "./info-card/card-modal/card-modal.component";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    PdfViewerModule
  ],
  declarations: [NavbarComponent, SearchModalComponent, InfoCardComponent, CardModalComponent],
  providers: [],
  exports: [NavbarComponent, InfoCardComponent]
})
export class ComponentsModule {}