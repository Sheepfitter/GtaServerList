import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServersComponent} from './components/serverslist/servers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GtaServerList';
}
