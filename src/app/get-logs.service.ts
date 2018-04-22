import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GetLogsService {

  constructor(private http:HttpClient) { }

  getLogs(token){
    const httpOptions = {
        headers: new HttpHeaders({
          "content-type": "application/json",
          "cache-control": "no-cache",
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          "access-control-allow-headers": "X-Requested-With,content-type",
          "access-control-allow-credentials": "true",
          "authorization": token
        })
    };

    return this.http.get<{}>('http://localhost:8081/logs/getlogs',httpOptions);


  }

}
