import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  ViewChild
} from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgIf, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'avakian';
  siteAtivo = true;
  headerHidden = false;
  diferencialVisible = false;
  conexaoVisible = false;
  cardsSectionVisible = false;
  resultadosSectionVisible = false;
  resultado374 = 0;
  resultado10 = 0;
  resultado90 = 0;
  resultado100 = 0;
  private lastScrollY = 0;
  private resultadosAnimated = false;

  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChild('heroVideo') heroVideo?: { nativeElement: HTMLVideoElement };
  @ViewChild('diferencialSection') diferencialSection?: { nativeElement: HTMLElement };
  @ViewChild('conexaoSection') conexaoSection?: { nativeElement: HTMLElement };
  @ViewChild('cardsSection') cardsSection?: { nativeElement: HTMLElement };
  @ViewChild('resultadosSection') resultadosSection?: { nativeElement: HTMLElement };

  ngAfterViewInit(): void {
    // Garante que o vídeo inicie automaticamente ao abrir o site (fallback para navegadores restritivos)
    const video = this.heroVideo?.nativeElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }

    // Observa a seção Nosso Diferencial para animação no scroll
    const section = this.diferencialSection?.nativeElement;
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.diferencialVisible = entry.isIntersecting;
            this.cdr.detectChanges();
          });
        },
        { threshold: 0.2, rootMargin: '0px' }
      );
      observer.observe(section);
    }

    // Observa a seção Conexão Sinérgica - anima quando usuário faz scroll no hero
    const conexaoSection = this.conexaoSection?.nativeElement;
    if (conexaoSection) {
      const conexaoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.conexaoVisible = entry.isIntersecting;
            this.cdr.detectChanges();
          });
        },
        { threshold: 0.1, rootMargin: '0px' }
      );
      conexaoObserver.observe(conexaoSection);
    }

    // Observa a seção de cards (Por que os Empresários nos Procuram)
    const cardsSection = this.cardsSection?.nativeElement;
    if (cardsSection) {
      const cardsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.cardsSectionVisible = entry.isIntersecting;
            this.cdr.detectChanges();
          });
        },
        { threshold: 0.1, rootMargin: '0px' }
      );
      cardsObserver.observe(cardsSection);
    }

    // Observa a seção Resultados para animação count-up dos números
    const resultadosSection = this.resultadosSection?.nativeElement;
    if (resultadosSection) {
      const resultadosObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.resultadosAnimated) {
              this.resultadosAnimated = true;
              this.animarNumerosResultados();
            }
            this.cdr.detectChanges();
          });
        },
        { threshold: 0.2, rootMargin: '0px' }
      );
      resultadosObserver.observe(resultadosSection);
    }

    // Expõe funções no console para ativar/desativar o site
    this.exporFuncoesConsole();
  }

  private exporFuncoesConsole(): void {
    const w = window as Window & { avakianAtivar?: () => void; avakianDesativar?: () => void; avakianToggle?: () => void };
    w.avakianAtivar = () => {
      this.siteAtivo = true;
      this.cdr.detectChanges();
      console.log('Site ativado.');
    };
    w.avakianDesativar = () => {
      this.siteAtivo = false;
      this.cdr.detectChanges();
      console.log('Site desativado.');
    };
    w.avakianToggle = () => {
      this.siteAtivo = !this.siteAtivo;
      this.cdr.detectChanges();
      console.log('Site', this.siteAtivo ? 'ativado' : 'desativado', '.');
    };
  }

  private animarNumerosResultados(): void {
    const duracao = 1500;
    const fps = 60;
    const intervalo = 1000 / fps;
    const totalFrames = Math.round((duracao / 1000) * fps);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progresso = Math.min(frame / totalFrames, 1);
      const easeOut = 1 - Math.pow(1 - progresso, 3);

      this.resultado374 = Math.round(374 * easeOut);
      this.resultado10 = Math.round(10 * easeOut);
      this.resultado90 = Math.round(90 * easeOut);
      this.resultado100 = Math.round(100 * easeOut);

      this.cdr.detectChanges();

      if (frame >= totalFrames) {
        clearInterval(timer);
        this.resultado374 = 374;
        this.resultado10 = 10;
        this.resultado90 = 90;
        this.resultado100 = 100;
        this.cdr.detectChanges();
      }
    }, intervalo);
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
