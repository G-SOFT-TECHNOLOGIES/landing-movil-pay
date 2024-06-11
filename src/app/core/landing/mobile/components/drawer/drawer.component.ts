import { Component } from '@angular/core';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  isOpen = false;

  constructor(private drawerService: DrawerService) {
    this.drawerService.drawerState$.subscribe((state: boolean) => {
      this.isOpen = state;
    });
  }

  closeDrawer() {
    this.drawerService.toggleDrawer();
  }

  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // this.closeDrawer();
    }
  }
}
