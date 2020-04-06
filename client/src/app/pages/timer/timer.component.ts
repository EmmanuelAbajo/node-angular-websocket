import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketClientService } from 'src/app/services/socket/socketclient.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit,OnDestroy {

  private unsubscribeSubject: Subject<void> = new Subject<void>();
  public message: string = '';

  constructor(private socketClient: SocketClientService) { }
 
  ngOnInit(): void {
    this.socketClient.getTimerUpdates().pipe(takeUntil(this.unsubscribeSubject)).subscribe(
      (msg: string)=>{
        this.message = msg;
        console.log(`Timer update: ${msg}`);
        document.getElementById('timer-upd').innerHTML += `<p>${this.message}</p>`
      }
    );
  }

  start(): void {
    this.socketClient.startTimer("");
  }

  stop(): void {
    this.socketClient.stopTimer("");
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

}
