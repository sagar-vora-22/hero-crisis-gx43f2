import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableauModule } from 'ngx-tableau';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';

@NgModule({
  declarations: [PageNotFoundComponent, ComposeMessageComponent],
  imports: [CommonModule, FormsModule, TableauModule],
  exports: [CommonModule, FormsModule, TableauModule],
})
export class SharedModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
