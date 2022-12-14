import { Component } from '@angular/core';

@Component({
  selector: 'app-crisis-center-home',
  templateUrl: './crisis-center-home.component.html',
  styleUrls: ['./crisis-center-home.component.css']
})
export class CrisisCenterHomeComponent { 
  serverUrl = "https://public.tableau.com";
  report = "Sehat-IntelVisualization/MainParametersDistribution"
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/