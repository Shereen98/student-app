import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor,HttpRequest,HttpHandler, HttpEvent} from '@angular/common/http';
import { Student } from '../student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService{

  private url : string = "https://preprod.gtnexus.com/rest/3.1/$StudentB12/";
  username ="ann@1234";
  password = "She1manu98"

  constructor( private http : HttpClient) {}
  
  getHeaders(){
    const headers = new HttpHeaders({
      "Authorization" :"Basic "+ btoa(this.username+":"+this.password),
      "dataKey": "6c12503c2f2b0a9475193ea48f3bb5f5b0be3447",
      "contentType": "application/json",
      "Content-Type" : "application/json"
    });
    return headers;
  }

  getStudents(): Observable<any>{
    let headers = this.getHeaders();
    
    var url = '/api/?oql=studentId!=""';
    return this.http.get<any>(url,{headers});
  }

  addStudents(student : Student):Observable<Student>{
    let headers = this.getHeaders();
       
        var url = "/api/";
    return this.http.post<Student>(url,student,{headers});
  }

  getStudent(id :Number): Observable<any>{
    let headers = this.getHeaders();
    
    var url = '/api/?oql=uid='+id;
    return this.http.get<any>(url,{headers}).pipe();
  }

  updateStudent(student : Student,uid:Number,fingerprint: string):Observable<Student>{
    let headers = new HttpHeaders({
      "Authorization" :"Basic "+ btoa(this.username+":"+this.password),
      "dataKey": "6c12503c2f2b0a9475193ea48f3bb5f5b0be3447",
      "contentType": "application/json",
      "Content-Type" : "application/json",
      "If-Match": fingerprint
    });

    var url = '/api/'+uid;
    return this.http.post<Student>(url,student,{headers});
  }

  getActionSet(uid:Number): Observable<any>{
    let headers = this.getHeaders();
    var url = '/api/'+uid+'/actionSet';
    return this.http.get<any>(url,{headers});
  }
}
