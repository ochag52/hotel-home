import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ RouterModule.forRoot([
    {
      path: '',
      loadChildren: () => import('../view/main/main.module')
        .then(m => m.MainModule)
    },
  ]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
