import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  images: string[] = [
    '../../../../assets/landing/Property 1=Default.png',
    '../../../../assets/landing/Property 1=Variant2.png',
    '../../../../assets/landing/Property 1=Variant3.png',
  ];
  currentImageIndex = 0;
  currentImage!: string;

  constructor( private renderer: Renderer2) {
    this.currentImage = this.images[this.currentImageIndex];
   
  }

  ngOnInit(): void {
    // Iniciar el cambio de imagen cada 5 segundos
    setInterval(() => {
      this.changeImage();
    }, 5000);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
  }

  scrollToTop() {
    this.renderer.setProperty(window, 'scrollTo', { top: 0, left: 0, behavior: 'smooth' });
  }
}
