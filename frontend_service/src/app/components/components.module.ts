import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';

import { SearchModalComponent } from "./navbar/search-modal/search-modal.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { InfoCardComponent } from "./info-card/info-card.component";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  declarations: [NavbarComponent, SearchModalComponent, InfoCardComponent],
  providers: [],
  exports: [NavbarComponent, InfoCardComponent]
})
export class ComponentsModule {}