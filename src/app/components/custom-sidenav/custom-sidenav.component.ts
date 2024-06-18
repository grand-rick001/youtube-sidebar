import { Component, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type MenuItem = {
  label: string;
  icon: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
})
export class CustomSidenavComponent {
  collapsed = input<boolean>(false);

  menuItems = signal<MenuItem[]>([
    { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
    { label: 'Content', icon: 'video_library', route: 'content' },
    { label: 'Analytics', icon: 'analytics', route: 'analytics' },
    { label: 'Comments', icon: 'comment', route: 'comments' },
  ]);

  profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));
}
