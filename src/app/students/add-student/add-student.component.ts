import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { Student } from 'src/app/student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students = new Observable<Student>();
  student: any;

  constructor(private httpService : HttpService,public dialogRef: MatDialogRef<AddStudentComponent>) { }

  form: FormGroup = new FormGroup({
    //studentId: new FormControl("", Validators.required),
    studentFirstName: new FormControl("", Validators.required),
    studentLastName: new FormControl("", Validators.required),
    studentAddress: new FormControl("", Validators.required),
    studentDoB: new FormControl("", Validators.required),
    studentBatchNumber: new FormControl("", Validators.required),
    studentFee: new FormControl("", Validators.required),
    status: new FormControl("active"),
  });

  initializeFormGroup() {
    this.form.setValue({
      studentFirstName: "",
      studentLastName: "",
      studentAddress: "",
      studentDoB: "",
      studentBatchNumber:"",
      studentFee: "",
      status: "active",
    });
  }

  ngOnInit() {
    this.httpService.getStudents().subscribe();
  }

  onSubmit(){
    if(this.form.valid){
      this.httpService.addStudents(this.form.value).subscribe((data :Student)=>{
        console.log(data);
      });
      this.form.reset();
      this.onClose();
    }
    
  }

  onClose() {
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }

  populateForm(student){
    this.form.patchValue(student);
  }
}
