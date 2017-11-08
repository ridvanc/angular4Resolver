import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private actr: ActivatedRoute) {
    this.actr.data.map(data => data.cres.json()).subscribe((res) => {
        console.log(res);
    });
  }

  ngOnInit() {
    console.log('Component Initiated');
  }

}
