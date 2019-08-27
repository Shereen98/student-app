import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor,HttpRequest,HttpHandler, HttpEvent} from '@angular/common/http';
import { Student } from '../student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService{

  private url : string = "https://preprod.gtnexus.com/rest/3.1/$StudentB12/";
  username : string;
  password : string;

  constructor( private http : HttpClient) { 
  }

 /* intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: 'Basic'+ btoa(this.username+':'+this.password)
      }
    });

    return next.handle(req);
  }*?

 /*use(HttpRequest,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 }*/
  getStudents(): Observable<any>{
    this.username = "ann@1234";
    this.password = "She1manu98"

    const headers = new HttpHeaders({
      "Authorization" :"Basic "+ btoa(this.username+":"+this.password),
      "dataKey": "6c12503c2f2b0a9475193ea48f3bb5f5b0be3447",
      "Content-Type" : "application/json"
    });
    var url = '/api/?oql=studentId!=""';
    return this.http.get<any>(url,{ headers});
  }

  addStudents(){
    
  }
}
