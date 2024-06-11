import { Component } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  slides: string[] = [
    '../../../../../../assets/landing/info1.png',
    '../../../../../../assets/landing/info2.png',
    '../../../../../../assets/landing/info3.png'
  ];

  private destroy$: Subject<void> = new Subject<void>();
  currentSlide = 0;

  ngOnInit(): void {
    // Cambiar automáticamente cada 5 segundos
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.nextSlide());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(slide: number): void {
    this.currentSlide = slide;
  }
}
