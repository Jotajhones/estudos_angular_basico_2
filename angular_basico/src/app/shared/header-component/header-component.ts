import { Component, computed, inject} from '@angular/core';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

  authService = inject(AuthService);

  user = computed(() => this.authService.currentUser());

  logout():void {
    this.authService.logout();
  }
}
