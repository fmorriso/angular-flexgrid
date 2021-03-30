import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
//
import { AngularVersionInformationService } from '../shared/angular-version-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public get angularVersion(): string {
    return this.ngVersion.versionFull;
  }
  public get title(): string {
    return 'angular-flexgrid';
  }

  constructor(public ngVersion: AngularVersionInformationService) {}

  ngOnInit(): void {}
}
