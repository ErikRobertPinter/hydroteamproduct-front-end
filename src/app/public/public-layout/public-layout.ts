import { Component } from '@angular/core';
import { PublicNavigation } from '../public-navigation/public-navigation';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [PublicNavigation],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {}
