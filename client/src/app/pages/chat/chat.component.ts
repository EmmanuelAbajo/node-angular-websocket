import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketClientService } from 'src/app/services/socket/socketclient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user/user.service';
import { Message } from 'src/app/models/message';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UsernameComponent } from './username/username.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnDestroy {

  private user: string;
  private message: Message;
  private unsubscribeSubject: Subject<void> = new Subject<void>();

  constructor(private _snackBar: MatSnackBar,
    private socketClient: SocketClientService,
    private userService: UserService,
    private dialog: MatDialog) { }

  ngOnInit(): void {   
    this.userService.getUserName().subscribe(
      (name: string)=>{
        this.user = name;
      }
    );

    if (this.user == 'user'){
      this.openDialog();
    }

    this.socketClient.getMessage().pipe(takeUntil(this.unsubscribeSubject)).subscribe(
      (msg: Message)=>{
        if(this.user !== msg.user){
          this._snackBar.open("New message Added!",'', { duration: 1000 });
        }
        document.getElementById('msg-container').innerHTML += 
              `<mat-card>
                  <mat-card-header>
                    <mat-card-title>Message from: ${msg.user}</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <p>${msg.message}</p>
                  </mat-card-content>
                </mat-card>`
      }
    )
  }

  send(msg: string): void {
    this.message = { user: this.user,message: msg}
    this.socketClient.sendMessage(this.message);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(UsernameComponent,dialogConfig);

    dialogRef.afterClosed().subscribe( _ => {
      this._snackBar.open("Welcome to chats!",this.user, { duration: 1000 });
    });
    
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  
}
