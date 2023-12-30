import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './app-icon-button.component.html',
  styleUrl: './app-icon-button.component.css'
})

export class AppIconButtonComponent {
 @Input() title!: string;
}
