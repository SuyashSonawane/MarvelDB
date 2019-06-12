import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public serachField = null

  search() {
    console.log(this.serachField)
    this.router.navigate(['/character', this.serachField])
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
