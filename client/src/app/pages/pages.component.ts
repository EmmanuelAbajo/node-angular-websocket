import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  public userName: string = 'User'
  public navLinks: {label: string, path: string[]}[] = [
    {label: 'Chat', path: ['/app','chat']},
    {label: 'Timer', path: ['/app','timer']},
  ]

  ngOnInit(): void {
  }

  refresh(): void {
    alert('Hi user!');
  }

}
