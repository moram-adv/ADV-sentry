import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  protected hasSubmitted = false;
  protected otpSubmitted = false;
  isOtpStep = false;
  protected otpError = '';


  protected readonly loginForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  protected readonly otpForm = this.formBuilder.nonNullable.group({
    otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });

  protected submit(): void {
    this.hasSubmitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const canSendOtp = this.authService.startLogin(this.loginForm.getRawValue());

    if (canSendOtp) {
      this.isOtpStep = true;
      this.otpError = '';
    }
  }

  protected verifyOtp(): void {
    this.otpSubmitted = true;

    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
      return;
    }

    if (!this.authService.verifyOtp(this.otpForm.controls.otp.value)) {
      this.otpError = 'Enter the valid dispatcher OTP: 246810.';
      return;
    }

    void this.router.navigateByUrl('/home');
  }
}
