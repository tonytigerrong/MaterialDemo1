import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, MySnackbarComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
const MaterailComponents = [
  MatButtonModule, MatButtonToggleModule,
  MatIconModule,MatBadgeModule,MatProgressSpinnerModule,
  MatToolbarModule,MatSidenavModule, MatMenuModule,MatListModule,
  MatDividerModule,MatExpansionModule, MatCardModule, MatTabsModule,
  MatStepperModule, MatInputModule,MatSelectModule,MatAutocompleteModule,
  MatCheckboxModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,
  MatSnackBarModule,MatDialogModule, MatTableModule ,MatSortModule,MatPaginatorModule
  ];
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents:[MySnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,
    MaterailComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
