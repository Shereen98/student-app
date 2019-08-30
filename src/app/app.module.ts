import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { HttpService } from "./shared/http.service";
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddStudentComponent,
    StudentDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
    HttpService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddStudentComponent
  ]
})
export class AppModule { }
