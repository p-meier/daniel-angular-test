import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  public getUserById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id)
  }

}
