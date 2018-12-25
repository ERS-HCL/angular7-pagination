import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://jsonplaceholder.typicode.com/posts';
      getConfig():Observable<any[]> {
	  //return "hi this is dummy response";
	  return this.http.get<any[]>(this.configUrl);
	}
}