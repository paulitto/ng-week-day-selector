import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeekDaySelectorModule } from 'projects/week-day-selector/src/public_api';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material';
import { ExamplesComponent } from './examples/examples.component';
import { WeekDaySelectorExampleComponent } from './examples/week-day-selector-example/week-day-selector-example.component';
import { WeekSelectorModule } from 'projects/week-selector/src/public_api';
import { WeekSelectorExampleComponent } from './examples/week-selector-example/week-selector-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    WeekDaySelectorExampleComponent,
    WeekSelectorExampleComponent
  ],
  imports: [
    BrowserModule,
    WeekDaySelectorModule,
    WeekSelectorModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
