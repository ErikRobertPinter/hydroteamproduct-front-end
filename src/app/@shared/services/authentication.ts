import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}
  register() {
    const dataLoad = 0;
    return this.http.post('', dataLoad).subscribe({
      next: () => {
        this.router.navigate(['/successful-signup']);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  login() {}

  logout() {}

  forgotPassword() {}
}
