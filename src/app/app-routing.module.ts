import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component'

const routes: Routes = [
  { path : "toolbar" , component: ToolbarComponent},
  { path : "login", component: LoginPageComponent },
  { path : "register", component: RegisterFormComponent},
  { path: "students/:studentId", component: StudentDetailComponent},
  { path : "students", component: StudentsComponent},
  { path : "add-student" , component: AddStudentComponent},
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
LoginPageComponent,
ToolbarComponent,
RegisterFormComponent,
StudentsComponent,
AddStudentComponent,
StudentDetailComponent
];