import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'avakian';
  headerHidden = false;
  private lastScrollY = 0;

  @ViewChild('heroVideo') heroVideo?: { nativeElement: HTMLVideoElement };

  ngAfterViewInit(): void {
    // Garante que o vídeo inicie automaticamente ao abrir o site (fallback para navegadores restritivos)
    const video = this.heroVideo?.nativeElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }

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
