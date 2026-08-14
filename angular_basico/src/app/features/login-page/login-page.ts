import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth-service';
import { AuthRequest } from '../../core/models/auth-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  authService = inject(AuthService);
  router = inject(Router);

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  logar(): void {
    if (this.login.valid) {

      const credentials = this.login.getRawValue() as AuthRequest;
      console.log(credentials)

      this.authService.login(credentials).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },

        error: (err) => console.error(err)
      })
    }
  }
}
