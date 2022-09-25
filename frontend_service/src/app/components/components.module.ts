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
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { ShoppingCartModalComponent } from './navbar/shopping-cart-modal/shopping-cart-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    PdfViewerModule
  ],
  declarations: [NavbarComponent, SearchModalComponent, InfoCardComponent, ShoppingListComponent, CardModalComponent, ShoppingCartModalComponent],
  providers: [],
  exports: [NavbarComponent, InfoCardComponent, ShoppingListComponent]
})
export class ComponentsModule {}