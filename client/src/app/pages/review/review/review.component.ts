import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  message = 'Dolapo component';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loadPage(value: string): void {
    switch (value) {
      case '1':
        console.log(this.route);
        this.router.navigate(['first'], {relativeTo: this.route});
        break;
      case '2':
        this.router.navigate(['second'], {relativeTo: this.route});
        break;
      case '3':
        this.router.navigate(['third'], {relativeTo: this.route});
        break;
      default:
        break;
    }
  }
}
