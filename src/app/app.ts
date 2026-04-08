import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './features/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
