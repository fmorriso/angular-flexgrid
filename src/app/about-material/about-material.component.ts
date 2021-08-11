import { Component, OnInit } from '@angular/core';

import { VERSION as matVersion } from '@angular/material/core';
//
import { AngularVersionInformationService } from '../shared/angular-version-information.service';

@Component({
  selector: 'app-about-material',
  templateUrl: './about-material.component.html',
  styleUrls: ['./about-material.component.scss'],
})
export class AboutMaterialComponent implements OnInit {
  get angularVersion(): string {
    return this.ngVersion.versionFull;
  }
  get title(): string {
    return 'angular-flexgrid';
  }
  get materialVersion(): string {
    return matVersion.full;
  }
  constructor(public ngVersion: AngularVersionInformationService) {}

  ngOnInit(): void {}
}
