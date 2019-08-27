import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    studentId: new FormControl("", Validators.required),
    studentFirstName: new FormControl("", Validators.required),
    studentLastName: new FormControl("", Validators.required),
    studentAddress: new FormControl("", Validators.required),
    studentDoB: new FormControl("", Validators.required),
    studentBatchNumber: new FormControl("", Validators.required),
    studentFee: new FormControl("", Validators.required),
    status: new FormControl(""),
  });

  initializeFormGroup() {
    this.form.setValue({
      studentId: "",
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
  }

}
