import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private userService: UserService) { }

  public userName = '';
  public navLinks: {label: string, path: string[]}[] = [
    {label: 'Chat', path: ['/app', 'chat']},
    {label: 'Timer', path: ['/app', 'timer']},
    {label: 'Audit', path: ['/app', 'audit']},
    {label: 'Review', path: ['/app', 'review']},
  ];

  ngOnInit(): void {
    this.userService.getUserName().subscribe(
      (name: string) => {
        this.userName = name;
      }
    );
  }

  refresh(): void {
    alert(`Hi ${this.userName}!`);
  }

  logout(): void {
    location.reload();
  }

}
