import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface LoginCredentials {
  readonly name: string;
  readonly password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'advanced_sentry_session_name';
  private readonly otp = '246810';
  private readonly currentUserName = signal<string | null>(sessionStorage.getItem(this.storageKey));
  private readonly pendingUserName = signal<string | null>(null);

  readonly userName = this.currentUserName.asReadonly();
  readonly pendingName = this.pendingUserName.asReadonly();

  constructor(private readonly router: Router) {}

  startLogin(credentials: LoginCredentials): boolean {
    const name = credentials.name.trim();
    const password = credentials.password.trim();

    if (!name || password.length < 4) {
      return false;
    }

    this.pendingUserName.set(name);
    return true;
  }

  verifyOtp(code: string): boolean {
    const name = this.pendingUserName();

    if (!name || code.trim() !== this.otp) {
      return false;
    }

    sessionStorage.setItem(this.storageKey, name);
    this.currentUserName.set(name);
    this.pendingUserName.set(null);
    return true;
  }

  logout(): void {
    sessionStorage.removeItem(this.storageKey);
    this.currentUserName.set(null);
    this.pendingUserName.set(null);
    void this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return this.currentUserName() !== null;
  }
}
