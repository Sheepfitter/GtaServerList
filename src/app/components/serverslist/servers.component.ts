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
    {thumbnail:'https://placehold.co/32x32',name: 'Server 1', description: 'Lorem Ipsum', status: 'Online', players: 10, maxPlayers: 20, country: 'US'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 2', description: 'Lorem Ipsum', status: 'Offline', players: 5, maxPlayers: 20, country: 'UK'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 3', description: 'Lorem Ipsum', status: 'Online', players: 12, maxPlayers: 20, country: 'US'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 4', description: 'Lorem Ipsum', status: 'Offline', players: 2, maxPlayers: 10, country: 'DE'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 5', description: 'Lorem Ipsum', status: 'Online', players: 8, maxPlayers: 15, country: 'FR'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 6', description: 'Lorem Ipsum', status: 'Online', players: 20, maxPlayers: 20, country: 'IT'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 7', description: 'Lorem Ipsum', status: 'Offline', players: 0, maxPlayers: 10, country: 'ES'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 8', description: 'Lorem Ipsum', status: 'Online', players: 18, maxPlayers: 20, country: 'US'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 9', description: 'Lorem Ipsum', status: 'Offline', players: 4, maxPlayers: 10, country: 'UK'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 10', description: 'Lorem Ipsum', status: 'Online', players: 15, maxPlayers: 20, country: 'RU'},
    {thumbnail:'https://placehold.co/32x32',name: 'Server 11', description: 'Lorem Ipsum', status: 'Offline', players: 1, maxPlayers: 10, country: 'PL'}
  ];
}
