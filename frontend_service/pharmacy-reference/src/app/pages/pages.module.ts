import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { CommonService } from "../services/common.service";

import { IndexComponent } from "./index/index.component";

@NgModule({
    imports: [ComponentsModule],
    declarations: [IndexComponent],
    providers: [CommonService],
    exports: [IndexComponent]
})
export class PagesModule {}