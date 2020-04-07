import { Component, OnInit } from '@angular/core';
import { SocketClientService } from 'src/app/services/socket/socketclient.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private socketClient: SocketClientService) { }

  ngOnInit(): void {
    this.socketClient.getMessage().subscribe(
      (msg: string)=>{
        console.log(msg);
      }
    )
  }

  send(): void {
    this.socketClient.sendMessage('Hello world');
  }

}
