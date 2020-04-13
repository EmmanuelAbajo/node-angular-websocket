import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userName: BehaviorSubject<string>

  constructor() { 
    this.userName = new BehaviorSubject<string>("user");
  }

  setUserName(name: string){
    this.userName.next(name);
  }

  getUserName(): Observable<string>{
    return this.userName.asObservable();
  }
}
