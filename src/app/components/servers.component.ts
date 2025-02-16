import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  imports: [NgForOf],
  selector: 'servers-list',
  templateUrl: './servers.component.html',
  styleUrl: 'servers.component.css'
})
export class ServersComponent {
  servers = [
    {name: 'Server 1', description: 'Lorem Ipsum', status: 'Online', players: 10, maxPlayers: 20, country: 'US'},
    {name: 'Server 2', description: 'Lorem Ipsum', status: 'Offline', players: 5, maxPlayers: 20, country: 'UK'},
    {name: 'Server 3', description: 'Lorem Ipsum', status: 'Online', players: 12, maxPlayers: 20, country: 'US'},
    {name: 'Server 4', description: 'Lorem Ipsum', status: 'Offline', players: 2, maxPlayers: 10, country: 'DE'},
    {name: 'Server 5', description: 'Lorem Ipsum', status: 'Online', players: 8, maxPlayers: 15, country: 'FR'},
    {name: 'Server 6', description: 'Lorem Ipsum', status: 'Online', players: 20, maxPlayers: 20, country: 'IT'},
    {name: 'Server 7', description: 'Lorem Ipsum', status: 'Offline', players: 0, maxPlayers: 10, country: 'ES'},
    {name: 'Server 8', description: 'Lorem Ipsum', status: 'Online', players: 18, maxPlayers: 20, country: 'US'},
    {name: 'Server 9', description: 'Lorem Ipsum', status: 'Offline', players: 4, maxPlayers: 10, country: 'UK'},
    {name: 'Server 10', description: 'Lorem Ipsum', status: 'Online', players: 15, maxPlayers: 20, country: 'RU'},
    {name: 'Server 11', description: 'Lorem Ipsum', status: 'Offline', players: 1, maxPlayers: 10, country: 'PL'}
  ];
}
