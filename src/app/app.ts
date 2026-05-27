import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Partnerek } from './partnerek/partnerek';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Partnerek],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TalaljPart');
}
