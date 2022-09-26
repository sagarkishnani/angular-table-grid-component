import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFileComponent } from './file/register-file/register-file.component';
import { FolderViewComponent } from './shared/folder-view/folder-view.component';

const routes: Routes = [
  { path: 'relaves/:id', component: FolderViewComponent },
  { path: 'relaves/registrar', component: RegisterFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
