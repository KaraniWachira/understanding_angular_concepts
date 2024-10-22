import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  param: any;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param = this.activatedRoute.snapshot.params['username'];
  }

}
