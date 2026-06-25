import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface LoginCredentials {
  readonly email: string;
  readonly password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'advanced_sentry_session_email';
  private readonly otp = '246810';
  private readonly currentUserEmail = signal<string | null>(sessionStorage.getItem(this.storageKey));
  private readonly pendingUserEmail = signal<string | null>(null);

  readonly userEmail = this.currentUserEmail.asReadonly();
  readonly pendingEmail = this.pendingUserEmail.asReadonly();

  constructor(private readonly router: Router) {}

  startLogin(credentials: LoginCredentials): boolean {
    const email = credentials.email.trim();
    const password = credentials.password.trim();

    if (!email || password.length < 4) {
      return false;
    }

    this.pendingUserEmail.set(email);
    return true;
  }

  verifyOtp(code: string): boolean {
    const email = this.pendingUserEmail();

    if (!email || code.trim() !== this.otp) {
      return false;
    }

    sessionStorage.setItem(this.storageKey, email);
    this.currentUserEmail.set(email);
    this.pendingUserEmail.set(null);
    return true;
  }

  logout(): void {
    sessionStorage.removeItem(this.storageKey);
    this.currentUserEmail.set(null);
    this.pendingUserEmail.set(null);
    void this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return this.currentUserEmail() !== null;
  }
}
