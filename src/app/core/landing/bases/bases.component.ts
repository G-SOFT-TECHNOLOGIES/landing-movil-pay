import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.scss']
})
export class BasesComponent {
  screenWidth: number = 0;
  screenHeight: number = 0;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(): void {
    this.getScreenSize();
  }
}
