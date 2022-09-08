import { NgModule } from '@angular/core';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [HeroesRoutingModule, SharedModule],
  declarations: [HeroListComponent, HeroDetailComponent],
})
export class HeroesModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
