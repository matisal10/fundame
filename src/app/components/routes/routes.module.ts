import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../../services/core/translator/translator.service';
import { MenuService } from '../../services/core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './template/pages/pages.module';
import { Router } from '@angular/router';
import { menu } from './menu';
import { routes } from './routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor( private router: Router, public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }

    obj() {
      this.router.navigate(['/extras/projectsdetails']);
    }
}
