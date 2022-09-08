import { NgModule } from '@angular/core';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CrisisCenterRoutingModule, SharedModule],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
  ],
})
export class CrisisCenterModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
