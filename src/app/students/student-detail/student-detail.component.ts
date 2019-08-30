import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from 'src/app/shared/http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student = new Observable<any>();
  actions= new Observable<any>();
  constructor(private httpService: HttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.student = this.httpService.getStudent(params["studentId"]).pipe(
        map(data => data.result)
      );
    })
  }

  getActions(){
    this.route.params.subscribe(params => {
      this.actions=this.httpService.getActionSet(params["studentId"]).pipe(map(
        data => data.result
      ));
    })
  }
}
