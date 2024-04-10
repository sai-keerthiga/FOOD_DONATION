import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideDialog(): void {
    const dialog = document.getElementById('cookiesDialog1');
    if (dialog) {
      dialog.style.display = 'none';
    }
  }
}

