import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-public-navigation',
  imports: [RouterLink],
  templateUrl: './public-navigation.html',
  styleUrl: './public-navigation.scss',
})
export class PublicNavigation {}
