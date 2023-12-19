import { Routes } from '@angular/router';
import {ViewComponent} from './view/view.component';
import {UploadComponent} from './upload/upload.component';
import {FourohfourComponent} from './fourohfour/fourohfour.component';


export const routes: Routes = [
    { path: 'view', component: ViewComponent },
    { path: 'upload', component: UploadComponent },
    { path: '',   redirectTo: '/view', pathMatch: 'full' },
    { path: '**', component: FourohfourComponent },
];
