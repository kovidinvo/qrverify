import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { QrverifyComponent } from './qrverify/qrverify.component';

const routes: Routes = [
  {path: "",component: QrverifyComponent},
  {path: "help", component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
