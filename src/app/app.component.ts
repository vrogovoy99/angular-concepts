import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: 'Hello! I`m your cusine',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello! I`m your cusine...';
  city = 'New York';
}

// @Component({
//   selector: 'app-user', 
//   template: '<h2>logged in as {{username}}',
//   standalone: true
// })
// export class UserComponent {
//   username = 'Biggest User';
// }
