import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { link } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  private url: string = link.baseAddress;
  socket: any;

  constructor() {
    this.socket = io(this.url);
   }
}
