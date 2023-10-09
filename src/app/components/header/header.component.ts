import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'closeDropdown($event)',
  },
})
export class HeaderComponent {
  enableDropdown: boolean = false;

  constructor(private eref: ElementRef) { }

  toggleDropdown() {
    this.enableDropdown = !this.enableDropdown;
  }

  closeDropdown(e: any) {
    if (!this.eref.nativeElement.contains(event?.target)) {
      this.enableDropdown = false;
    };
  }
}
