import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  public isDisabled: boolean;
  public userNameForm: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<UsernameComponent>,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userNameForm = new FormGroup({
      userNameField: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)])
    });
    this.isDisabled = false;
  }

  setUser() {
    let name: string = this.userNameForm.value.userNameField;
    if (this.userNameForm.valid){
      this.isDisabled = true;
      this.userService.setUserName(name); 
    }
  }

  close(): void{
    this.dialogRef.close();
  }
}
