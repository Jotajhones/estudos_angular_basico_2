import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { environment } from "../../../environments/environment.development";
import { Observable, tap } from "rxjs";
import { AuthRequest } from "../models/auth-request";
import { AuthResponse } from "../models/auth-response";
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private http = inject(HttpClient);
    private cookie = inject(CookieService);
    private url = `${environment.API_BASE_URL}/auth/login`;

    login(credentials: AuthRequest): Observable<AuthResponse> {

        return this.http.post<{ token: string }>(this.url, credentials).pipe(
            tap(res => {

                this.cookie.set('access_token', res.token, {
                    expires: 1,
                    secure: false,
                    sameSite: 'Lax'
                })

                if (credentials.email) {

                    localStorage.setItem('user_email', credentials.email);
                }
            })
        )
    }

    logout(): void {
        this.cookie.delete('access_token');
        localStorage.removeItem('user_email');
    }

    getToken(): string {
        return this.cookie.get('access_token');
    }

    getUserEmail(): string | null {
        return localStorage.getItem('user_email');
    }

    isAuthenticated(): boolean {

        const token = this.getToken();

        if (!token) {
            return false;
        }

        try {

            const decodedToken: any = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000);

            if (decodedToken.exp < currentTime) {
                this.logout();
                return false;
            }

            return true;

        } catch (error) {
            console.error('Token malformado ou inválido', error);
            this.logout();
            return false;
        }
    }
}

