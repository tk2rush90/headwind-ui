import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './example-page.component.html',
  styleUrl: './example-page.component.scss',
})
export class ExamplePageComponent {}
