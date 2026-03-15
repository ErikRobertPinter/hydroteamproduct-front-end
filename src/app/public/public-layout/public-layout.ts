import { Component } from '@angular/core';
import { PublicNavigation } from '../public-navigation/public-navigation';
import { AboutRoutingModule } from '../about/about-routing-module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [PublicNavigation, RouterOutlet, AboutRoutingModule],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {}
