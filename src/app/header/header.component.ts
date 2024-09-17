import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeTab: string = 'details'; 
 // Method to change the active tab
  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
