import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent {
  sections: string[] = ['Servicio', '¿Cómo funciona?', 'Aliados', 'Contactanos'];
  activeSection: string = '';
  isScrolled: boolean = false;

  images: string[] = [
    '../../../../assets/landing/Property 1=Default.png',
    '../../../../assets/landing/Property 1=Variant2.png',
    '../../../../assets/landing/Property 1=Variant3.png',

  ];
  currentImageIndex = 0;
  currentImage!: string;

  constructor() {
    this.currentImage = this.images[this.currentImageIndex];
   }
  ngOnInit(): void {
    // Iniciar el cambio de imagen cada 5 segundos
    setInterval(() => {
      this.changeImage();
    }, 5000);


  }

  

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0; // Cambiamos a > 100 para activar el cambio de color más pronto
  }

  scrollToSection(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      const offset = 60; // Puedes ajustar este valor según sea necesario
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.activeSection = ''; // Optional: Reset the active section
  }

  
}
