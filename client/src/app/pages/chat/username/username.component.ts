import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  public isDisabled: boolean = false;

  constructor(public dialogRef: MatDialogRef<UsernameComponent>,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  setUser(name: string) {
    if (!name) return;
    this.isDisabled = true;
    this.userService.setUserName(name); 
  }

  close(): void{
    this.dialogRef.close();
  }
}
