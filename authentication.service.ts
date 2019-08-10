import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}
  
  login(username, passwordArg) {
        let url = 'http://';

        return this.http.post('https://bypasscors.herokuapp.com/api/?url=' + url,
                             {data: {email: username, password: passwordArg}, headers: {'Content-Type':  'application/json'}})
           .subscribe(data => {console.log("success", data);}, 
           		error => {console.log("error", error);});
  }
}
