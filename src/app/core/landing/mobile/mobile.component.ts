import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  isOpen: boolean = false;
  sections: string[] = ['Inicio', 'Servicios', 'AcercaDe', 'Contacto'];
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
  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isOpen = false; // Cerrar el drawer después de hacer clic en un elemento del menú
    }
  }
}
