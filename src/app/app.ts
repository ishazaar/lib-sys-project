import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Add NavbarComponent here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'lib_sys';
}
