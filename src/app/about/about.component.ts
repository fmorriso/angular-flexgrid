import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { VERSION as matVersion} from '@angular/material/core';
//
import { AngularVersionInformationService } from '../shared/angular-version-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
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
