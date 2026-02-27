import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avakian';
  headerHidden = false;
  private lastScrollY = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollY = window.scrollY;
    const diferencialEl = document.getElementById('nosso-diferencial');
    const passedDiferencial = diferencialEl
      ? currentScrollY > diferencialEl.offsetTop + diferencialEl.offsetHeight
      : false;

    if (currentScrollY < 80 || !passedDiferencial) {
      this.headerHidden = false;
    } else if (currentScrollY > this.lastScrollY) {
      this.headerHidden = true;
    } else {
      this.headerHidden = false;
    }
    this.lastScrollY = currentScrollY;
  }
}
