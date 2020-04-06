import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { link } from 'src/app/constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  private url: string = link.baseAddress;
  socket: any;

  constructor() {
    this.socket = io(this.url);
   }

   startTimer(msg: string): void {
     this.socket.emit('start-timer',msg);
   }

   stopTimer(msg: string): void {
      this.socket.emit('stop-timer',msg);
   }

   getTimerUpdates(): Observable<any> {
     return new Observable<any>(observer => {
       this.socket.on('timer-update',(msg: string)=>{
         observer.next(msg);
       });
       return () => this.stopTimer('');
     })

   }
}
