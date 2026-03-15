import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  constructor(private http: HttpClient) {}
  register() {}

  login() {}

  logout() {}

  forgotPassword() {}
}
