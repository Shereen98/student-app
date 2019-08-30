import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { AddStudentComponent } from './add-student/add-student.component';
import { observable, Observable } from 'rxjs';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = new Observable<any>();
  displayedColumns: string[] = ['id','name','dob','address','batchNo','status'];
  dataSource = new MatTableDataSource<Student[]>();

  constructor( private httpService : HttpService,http: HttpClient,private dialog: MatDialog,) { }

  @ViewChild(MatSort, null) sort: MatSort;
  searchKey: string;

  ngOnInit() {
   this.students = this.httpService.getStudents().pipe(
     map(data => data.result)
   );

   this.students.subscribe(next => {
    this.dataSource = new MatTableDataSource(next)
    this.dataSource.sort = this.sort;
   })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  /* concatenates all the objects in the list data and concerts them into lower case */
  applyFilter() {
    this.dataSource.filter = this.searchKey ? this.searchKey.trim().toLowerCase() : null;
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig(); //creates a new MatDialogConfig object
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "78%";
    dialogConfig.height = "90%;";
    this.dialog.open(AddStudentComponent, dialogConfig);
  }
}


