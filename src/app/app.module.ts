import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/custom-material.module';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutMaterialComponent } from './about-material/about-material.component';


@NgModule({
  declarations: [AppComponent, AboutComponent, AboutMaterialComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
